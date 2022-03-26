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

`r_animate.js` is only performance well on `vue` right-now. 
        
More supporting are on process now.

[npm-downloads-src]: https://img.shields.io/npm/dt/r_animate.svg?style=flat&color=darkgreen
[npm-downloads-href]: https://www.npmjs.com/package/r_animate

[npm-version-src]: https://img.shields.io/npm/v/r_animate/latest.svg?style=flat&color=darkorange&label=version
[npm-version-href]: https://www.npmjs.com/package/r_animate

---
### Click to see the implement👇

<a href="#Example3Dropsimulation"><img src="https://github.com/r1ader/r_animate/blob/main/image/example_3_cn.gif" alt="example_3_cn"></a>


## Installation

```bash
npm install --save r_animate 
```

## Example

#### Example1：Fade in and out

<img src="https://github.com/r1ader/r_animate/blob/main/image/example_1_cn.gif" alt="example_1_cn">

You can check and run [the whole App.vue](https://stackblitz.com/edit/vue-ufvvux) in `Playground`

or , check [the whole App.vue](https://github.com/r1ader/r_animate/blob/main/code/example_1.vue) in `Github` 

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

<img src="https://github.com/r1ader/r_animate/blob/main/image/example_2_cn.gif" alt="example_2_cn">

You can check and run [the whole App.vue](https://stackblitz.com/edit/vue-zpshvy) in `Playground`

or , check [the whole App.vue](https://github.com/r1ader/r_animate/blob/main/code/example_2.vue) in `Github`

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

<img src="https://github.com/r1ader/r_animate/blob/main/image/example_3_cn.gif" alt="example_3_cn">

You can check and run [the whole App.vue](https://stackblitz.com/edit/vue-fdkv5z) in `Playground`

or , check [the whole App.vue](https://github.com/r1ader/r_animate/blob/main/code/example_3.vue) in `Github`

```javascript
// App.vue
// ...
// key code
this.$refs.shadow
    .r_animate({
        opacity: 0,
        transform: ' translateY(-50px) scale(0.1) scaleY([1~0.1])',
        duration: 16,
    })
    .r_animate({
        opacity: '[0~1]',
        transform: 'translateY(-50px) scale([0.1~1]) scaleY(0.1)',
        duration: 500,
        interpolation: 'easeInQuad'
    })
    .r_animate({
        opacity: '[0~1]',
        transform: 'translateY(-50px) scale([0.1~1]) scaleY(0.1)',
        duration: 300,
        interpolation: 'easeOutQuad',
        reverse: true
    })
// ...

this.$refs.circle
    .r_animate({
        transform: 'translateY([-200~0]px)',
        duration: 500,
        interpolation: 'easeInQuad'
    })
    .r_animate({
        transform: 'translateY([0~-100]px)',
        duration: 300,
        interpolation: 'easeOutQuad',
    })
// ...
```
