export function interpolation_functions(method) {
    switch (method) {
        case 'easeInSine':
            return (x) => {
                return 1 - Math.cos((x * Math.PI) / 2);
            }
        case 'easeInCirc':
            return (x) => {
                return 1 - Math.sqrt(1 - Math.pow(x, 2));
            }

        case 'easeOutSine':
            return (x) => {
                return Math.sin((x * Math.PI) / 2);
            }
        case 'easeOutCirc':
            return (x) => {
                return Math.sqrt(1 - Math.pow(x - 1, 2));
            }

        case 'easeInOutSine':
            return (x) => {
                return -(Math.cos(PI * x) - 1) / 2;
            }
        case 'easeInOutCirc':
            return (x) => {
                return x < 0.5
                    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
                    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
            }

        case 'easeInQuad':
            return (x) => {
                return x * x;
            }
        case 'easeInBack':
            return (x) => {
                const c1 = 1.70158;
                const c3 = c1 + 1;

                return c3 * x * x * x - c1 * x * x;
            }

        case 'easeOutQuad':
            return (x) => {
                return 1 - (1 - x) * (1 - x);
            }
        case 'easeOutExpo':
            return (x) => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            }
        case 'easeOutBack':
            return (x) => {
                const c1 = 1.70158;
                const c3 = c1 + 1;

                return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
            }


        case 'easeInOutQuad':
            return (x) => {
                return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
            }
        case 'easeInOutBack':
            return (x) => {
                const c1 = 1.70158;
                const c2 = c1 * 1.525;

                return x < 0.5
                    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
                    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
            }
        case 'easeInOutExpo':
            return (x) => {
                return x === 0
                    ? 0
                    : x === 1
                        ? 1
                        : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                            : (2 - Math.pow(2, -20 * x + 10)) / 2;
            }

        default:
            return (x) => {
                return x
            }
    }
}