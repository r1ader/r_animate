<h1 align="center" style="font-size:60px;font-weight:bolder">r_animate.js</h1>

<h4 align="center">

[![Downloads][npm-downloads-src]][npm-downloads-href]
[![Version][npm-version-src]][npm-version-href]

</h4>

<h3 align="center">produce animation with functional programming</h3>

---

English | [中文](https://github.com/r1ader/r_animate/blob/main/README_CN.md)

Notice: 

`r_animate.js` is in its infancy.

`r_animate.js` is only performance well on `vue` and `browser` that support `import` natively right-now. 
        
More supporting are on process now.

[npm-downloads-src]: https://img.shields.io/npm/dt/r_animate.svg?style=flat&color=darkgreen
[npm-downloads-href]: https://www.npmjs.com/package/r_animate

[npm-version-src]: https://img.shields.io/npm/v/r_animate/latest.svg?style=flat&color=darkorange&label=version
[npm-version-href]: https://www.npmjs.com/package/r_animate

---

## Installation

### npm:
```bash
npm install --save r_animate 
```

### Browser:
Mainstream browsers such as chrome and firefox already support import natively

```html
<script type="module">
    import { r_register, act } from "https://unpkg.com/r_animate/index.js";
</script>
```

[how to use r_animate.js in native html and javascript](https://github.com/r1ader/r_animate/blob/main/code/test.html)


## Example

#### Example1：Fade in and out

![](./image/example_1_cn.gif)

You can check and run [the completed App.vue](https://stackblitz.com/edit/vue-ufvvux) in `Playground`

or , check [the completed App.vue](https://github.com/r1ader/r_animate/blob/main/code/example_1.vue) in `Github` 

```javascript
// App.vue
// ...
// key code
this.$refs.circle
    .r_animate({
        opacity: '[1~0]',
        duration: 2000,
    })
    .r_animate({
        opacity: '[0~1]',
        duration: 2000,
    });
// ...
```

---

#### Example2：Zoom

![](./image/example_2_cn.gif)


You can check and run [the completed App.vue](https://stackblitz.com/edit/vue-zpshvy) in `Playground`

or , check [the completed App.vue](https://github.com/r1ader/r_animate/blob/main/code/example_2.vue) in `Github`

```javascript
// App.vue
// ...
// key code
this.$refs.circle
    .r_animate({
        transform: 'scale([1~2])',
        duration: 2000,
    })
    .r_animate({
        transform: 'scale([2~1])',
        duration: 2000,
    });
//...
```

---

#### Example3：Drop simulation

![](./image/example_3_cn.gif)

You can check and run [the completed App.vue](https://stackblitz.com/edit/vue-fdkv5z) in `Playground`

or , check [the completed App.vue](https://github.com/r1ader/r_animate/blob/main/code/example_3.vue) in `Github`