import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';
import { interpolation_functions } from "./src/math"
import {
    deep_assign,
    getNumberFromCssValue,
    isAnimationValid,
    r_warn,
    parseColorProps
} from "./src/util";

const clog = console.log

const expose_func_list = [
    'clean_remain_process',
    'r_animate',
    'r_then',
    'r_busy',
    'r_queue',
    'r_cancel',
]

const expose_props_list = [
    'r_id',
    'busy',
    'queue',
    'in_task',
]

const config_props_list = [
    'callback',
    'reverse',
    'duration',
    'delay',
    'interpolation',
]

const support_props = {
    px_props:
        [
            'width',
            'height',
            'top',
            'left',
            'right',
            'right',
            'bottom',
            'padding',
            'margin',
            'borderRadius',
        ],
    number_props: [
        'zIndex',
        'opacity'
    ],
    color_props: [
        'borderColor',
        'backgroundColor'
    ]
}

const class_prop = [
    'name',
    'callback',
    'reverse',
    'duration',
    'delay',
    'interpolation',
    'parallel',
]

class R_animate_config {
    constructor(config) {
        const { start, end, duration, delay, interpolation, reverse } = config
        Object.keys(config).forEach(key => {
            this[key] = config[key]
        })
        this.name = config.name ||
            Object.keys(config)
                .filter(o => config_props_list.indexOf(o) === -1)
                .map(o => `${ o } : ${ config[o] }`)
                .join('\n')
        this.callback = config.callback
        this.reverse = reverse || false
        this.duration = _.isNumber(duration) ? duration : 0
        this.delay = delay || 0
        this.interpolation = interpolation || 'easeOutExpo'
    }

    // todo support the single item of transform
    //  and auto fill other item with update function

    // todo support the unit change e.g.(em px vw vh)
    update(ref) {
        Object.keys(this).filter(o => class_prop.indexOf(o) === -1).forEach(key => {
            // todo replace all the [0~1] like pattern with a number
            //  decrease the pressure of the regex
            if (!isAnimationValid(this[key])) {
                return r_warn(`syntax error ${ key } : ${ this[key] }`)
            }
            Object.keys(support_props).forEach(prop_type => {
                if (support_props[prop_type].indexOf(key) > -1) {
                    if (!ref) return
                    const computed_style = getComputedStyle(ref)
                    if (prop_type === 'color_props') {
                        this[key] = parseColorProps(computed_style[key], this[key])
                        return
                    }
                    const unit = {
                        px_props: 'px',
                        number_props: '',
                    }[prop_type] || ''
                    const uppercasePropName = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    const origin_str = ref.style[key] || computed_style.getPropertyValue(uppercasePropName) || '0';
                    const origin_value = getNumberFromCssValue(origin_str, unit)
                    if (/\[(-|\d|\.)*?~(-|\d|\.)+?\]/.test(this[key])) {
                        this[key] = this[key].replace(/([\[])(\~)/g, `[${ origin_value }~`)
                        return
                    }
                    const css_value = getNumberFromCssValue(this[key], unit)
                    if (!_.isNumber(css_value)) {
                        return r_warn(`Unrecognized Style Value "${ this[key] }"`)
                    }
                    this[key] = `[${ origin_value }~${ css_value }]${ unit }`
                }
            })
        })
    }

    replace(obj) {
        return deep_assign(this, obj)
    }

    get plan_duration() {
        let res = 0
        if (_.isNumber(this.delay)) res += this.delay
        if (_.isNumber(this.duration)) res += this.duration
        return res
    }
}

class R_registered_dom {
    constructor(r_id, item) {
        this.r_id = r_id
        this.ref = item
        this.busy = false
        this.in_task = null
        this.queue = []
        this.inter_func = (a) => a
    }

    run() {
        if (this.busy) return
        if (this.queue.length === 0) {
            console.warn(this.ref.toString() + '’s queue is empty')
        }
        const config = this.queue.shift()
        if (!config) return
        this.in_task = config
        this.busy = true
        this.inter_func = interpolation_functions(config.interpolation)
        config.update(this.ref)
        this.render_process = requestAnimationFrame(() => this.render(0))
    }

    render(frame_index) {
        const config = this.in_task
        if (!config) return
        const ratio = this.inter_func(Math.min((frame_index * 16 / config.plan_duration), 1.0))
        Object.keys(config).forEach(key => {
            const extract_number_reg = /\[(-|\d|\.)+?~(-|\d||\.)+?\]/g
            if (!_.isString(config[key])) return
            const extract_res = config[key].match(extract_number_reg)
            if (!_.isArray(extract_res) || !extract_res.length) return
            let groove = config[key].replace(extract_number_reg, '{}')
            const slots = extract_res.map(range => {
                let [start_value, end_value] = range.replace('[', '').replace(']', '').split('~').map(o => _.toNumber(o))
                if (config.reverse) {
                    [start_value, end_value] = [end_value, start_value]
                }
                return start_value + (end_value - start_value) * ratio
            })
            slots.forEach(value => {
                groove = groove.replace('{}', Math.round(value * 1000) / 1000)
            })
            this.ref.style[key] = groove
        })
        if (_.isFunction(config.parallel)) {
            config.parallel(ratio)
        }
        if (frame_index * 16 < config.plan_duration) {
            requestAnimationFrame(() => this.render(frame_index + 1))
        } else {
            this.busy = false
            this.in_task = null
            if (_.isFunction(config.callback)) {
                config.callback(this)
            }
            if (!!this.queue.length) this.run()
        }
    }

    r_stop() {
        if (this.render_process) {
            cancelAnimationFrame(this.render_process)
            this.render_process = undefined
        }
        this.busy = false
        this.in_task = null
    }

    r_cancel() {
        if (this.render_process) {
            cancelAnimationFrame(this.render_process)
            this.render_process = undefined
        }
        this.busy = false
        this.in_task = null
        this.queue = []
    }

    clean_remain_process() {
        this.queue = []
    }

    r_animate(config) {
        this.queue.push(new R_animate_config(config))
        if (!this.busy) {
            setTimeout(() => {
                this.run()
            }, 16)
        }
        return this.ref
    }

    r_then(func) {
        this.queue.push(new R_animate_config({ duration: 0, callback: func }))
        return this.ref
    }

    r_busy() {
        return this.busy
    }

    r_queue() {
        return this.queue
    }

    r_same(target) {
        target.queue = target.queue.concat(this.queue)
        setTimeout(() => {
            target.run()
        }, 16)
        return target
    }

    r_sleep(delay_duration) {
        this.queue.push(new R_animate_config({
            delay: delay_duration
        }))
        if (!this.busy) {
            setTimeout(() => {
                this.run()
            }, 16)
        }
        return this.ref
    }
}

class R_director {
    constructor() {
        this.id = uuidv4().replace(/-/g, "")

        this.registered_dict = {}

        this.registered_queue = []
    }

    register(args) {
        // todo deal the situation that one dom was registered for more than one time
        const wait_register_queue = []
        if (!_.isArray(args)) {
            const r_id = uuidv4().replace(/-/g, "")
            wait_register_queue.push(r_id)
            this.registered_dict[r_id] = new R_registered_dom(r_id, args)
            this.registered_queue.push(this.registered_dict[r_id])
        } else {
            args = _.compact(args)
            args.forEach(item => {
                const r_id = uuidv4().replace(/-/g, "")
                wait_register_queue.push(r_id)
                this.registered_dict[r_id] = new R_registered_dom(r_id, item)
                this.registered_queue.push(this.registered_dict[r_id])
            })
        }

        wait_register_queue.forEach(r_id => {
            const registered_dom = this.registered_dict[r_id]
            const element = registered_dom.ref
            expose_props_list.forEach(props_name => {
                element[props_name] = registered_dom[props_name]
            })
            expose_func_list.forEach(func_name => {
                element[func_name] = registered_dom[func_name].bind(registered_dom)
            })
        })
    }

    take(env) {
        Object.keys(env.$refs).forEach(ref_name => {
            this.register(env.$refs[ref_name])
        })
    }

    stop() {

    }

    continue() {

    }

    cut() {
        this.registered_queue.forEach(member => {
            member.queue = []
            member.stop()
        })
    }

    read() {
        console.log('I am', this.id)
        return this.registered_queue
    }

    copy(origin, targets) {
        const origin_dom = this.registered_dict[origin.r_id]
        targets.forEach(target => {
            const registered_dom = this.registered_dict[target.r_id]
            registered_dom.queue = registered_dom.queue.concat(origin_dom.queue)
            setTimeout(() => {
                registered_dom.run()
            }, 16)
            return registered_dom.ref
        })
    }
}

export default R_director