import _ from "lodash";

export function deep_assign(target, origin) {
    Object.keys(origin).forEach(key => {
        if (_.isObject(origin[key])) {
            target[key] = deep_assign(target[key], origin[key])
        } else {
            target[key] = origin[key]
        }
    })
    return target
}

// todo support more unit
export function getNumberFromCssValue(value, unit) {
    unit = unit || ''
    // const px_reg = /(-|\d+|\.)+?px/g
    const reg = new RegExp(`^(-|\\d+|\\.)+[${unit}]*$`, 'gi')
    const res = reg.exec(value)
    // clog(value, reg, res)
    if (!res) return undefined
    return parseFloat(res[0].replace('px', ''))
}

export function r_warn(msg) {
    console.warn(`r_animate.js warning: ${ msg }`)
}

export function isAnimationValid(str) {
    str = str.toString().replace(/(\[((-|\.|\d)*?)~((-|\.|\d)+?)\])/g, '0')
    const check_reg = /^(?:(?:(?:-?(?:\d+\.*)*\d+?)(?:px|reg)?)|(?:rgba*\((?:\d+\.*)*\d+?(?:,\s?(?:\d+\.*)*\d+?){2,3}\))|(?:(?:scale|translate|rotate|perspective|skew|matrix)(?:X|Y|Z)?\(-?(?:\d+\.*)*\d+?(?:px|deg)?(?:,\s?-?(?:\d+\.*)*\d+?(?:px|deg)?){0,2}\)\s*)+)$/g
    if (check_reg.test(str)) {
        return true
    }
    return false
}

export function parseColorProps(start_color, end_color) {
    if ((start_color + end_color).indexOf('a') === -1) {
        const [sr, sg, sb] = start_color.replace('rgb(', '').replace(')', '').replace(/\s/g, '').split(',')
        const [er, eg, eb] = end_color.replace('rgb(', '').replace(')', '').replace(/\s/g, '').split(',')
        return `rgb([${ sr }~${ er }],[${ sg }~${ eg }],[${ sb }~${ eb }])`
    }
}