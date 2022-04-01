function get_rotate(r, reg, axis) {
    axis = axis || 'Z'
    return {
        transform: `rotate${ axis }([0~${ r ? '' : '-' }${ reg }]deg)`,
    }
}

function get_various_rotate() {
    const rs = [30, 45, 60, 90, 180, 360]
    const res = {}
    rs.map(r => {
        res[`ROTATE_${ r }`] = get_rotate(true, r)
        res[`ROTATE_${ r }_REVERSE`] = get_rotate(false, r)
        res[`ROTATE_X_${ r }`] = get_rotate(true, r, 'X')
        res[`ROTATE_X_${ r }_REVERSE`] = get_rotate(false, r, 'X')
        res[`ROTATE_Y_${ r }`] = get_rotate(true, r, 'Y')
        res[`ROTATE_Y_${ r }_REVERSE`] = get_rotate(false, r, 'Y')
    })
    return res
}

const act = {
    OUT: {
        OPACITY: { opacity: '[1~0]' },
        BLUR: {
            filter: 'blur([0~30]px)',
            opacity: '[1~1]',
            ease: 'linear',
            callback: [{
                opacity: '[1~0]',
                ease: 'linear',
                duration: 300
            }],
            duration: 300,
        },
        SCROLL_UP: {
            transform: 'translate(0, [0~-200]px) perspective(500px) rotateX([0~90]deg)',
            opacity: '[1~0]',
            ease: 'cubic-bezier(.69,.05,.2,.94)'
        },
        SCROLL_DOWN: {
            transform: 'translate(0, [0~200]px) perspective(500px) rotateX([0~-90]deg)',
            opacity: '[1~0]',
            ease: 'cubic-bezier(.69,.05,.2,.94)'
        },

    },
    IN: {
        OPACITY: { opacity: '[0~1]' },
        BLUR: {
            opacity: '[1~0]',
            filter: 'blur([30~30]px)',
            ease: 'linear',
            reverse: true,
            callback: [{
                filter: 'blur([0~30]px)',
                reverse: true,
                ease: 'linear',
                duration: 300
            }],
            duration: 300,
        },
        SCROLL_DOWN: {
            transform: 'translate(0, [-200~0]px) perspective(500px) rotateX([90~0]deg)',
            opacity: '[0~1]',
            ease: 'cubic-bezier(.69,.05,.2,.94)'
        },
        SCROLL_UP: {
            transform: 'translate(0, [200~0]px) perspective(500px) rotateX([-90~0]deg)',
            opacity: '[0~1]',
            ease: 'cubic-bezier(.69,.05,.2,.94)'
        }
    },
    EMPHASIZE: {
        SHAKE_X: {
            duration: 0,
            callback: [
                {
                    transform: 'translateX([0~5]%)',
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    duration: 25
                },
                {
                    transform: 'translateX([5~-5]%)',
                    duration: 50,
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    loop: '4 alternate'
                },
                {
                    transform: 'translateX([-5~0]%)',
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    duration: 25
                },
            ]
        },
        SHAKE_Y: {
            duration: 0,
            callback: [
                {
                    transform: 'translateY([0~5]%)',
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    duration: 25
                },
                {
                    transform: 'translateY([5~-5]%)',
                    duration: 50,
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    loop: '4 alternate'
                },
                {
                    transform: 'translateY([-5~0]%)',
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    duration: 25
                },
            ]
        },
        SHAKE_ROTATE: {
            duration: 0,
            callback: [
                {
                    transform: 'rotateZ([0~10]deg)',
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    duration: 25
                },
                {
                    transform: 'rotateZ([10~-10]deg)',
                    duration: 50,
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    loop: '4 alternate'
                },
                {
                    transform: 'rotateZ([-10~0]deg)',
                    ease: 'cubic-bezier(.69,.05,.98,.34)',
                    duration: 25
                },
            ]
        },
        ...get_various_rotate(),
        BORDER_SWELL: {
            border: '[0~1]px solid',
            padding: '[0~30]px',
            wrap: true,
            callback: [
                { transform: 'scale([1~0.5])' }
            ]
            // boxSizing: content-
        }
    },
    PHYSICS: {},
    EFFECTS: {},
}

const add_name = (obj, name) => {
    obj.name = name
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] !== 'object') return
        add_name(obj[key], name + '.' + key)
    })
}
add_name(act, 'act')
export default act