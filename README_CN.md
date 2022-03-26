# r_animate.js

一个能帮您更方便地在 `vue` 项目中制作 `css` 动画的简单工具，以及，不止 `css` 动画

[English](https://github.com/r1ader/r_animate/blob/main/README.md) | 中文

[![Downloads][npm-downloads-src]][npm-downloads-href]
[![Version][npm-version-src]][npm-version-href]

[npm-downloads-src]: https://img.shields.io/npm/dt/r_animate.svg?style=flat&color=darkgreen

[npm-downloads-href]: https://www.npmjs.com/package/r_animate

[npm-version-src]: https://img.shields.io/npm/v/r_animate/latest.svg?style=flat&color=darkorange&label=version

[npm-version-href]: https://www.npmjs.com/package/r_animate

---
点击看看如何实现👇

<a href="#范例3掉落模拟"><img src="https://github.com/r1ader/r_animate/blob/main/image/example_3_cn.gif" alt="example_3_cn"></a>


## 安装

```bash
npm install --save r_animate 
```

## 范例

#### 范例1：渐入渐出

<img src="https://github.com/r1ader/r_animate/blob/main/image/example_1_cn.gif" alt="example_1_cn">

您可以在 Playground 中 [查看并运行全部代码](https://stackblitz.com/edit/vue-ufvvux)

或者（ 由于网络原因无法访问 Playground ）

也可以在 Github 中 [查看全部代码](https://github.com/r1ader/r_animate/blob/main/code/example_1.vue)

```javascript
//...
// 关键代码
this.$refs.circle
    .r_animate({
        opacity: '[1~0]',
        duration: 2000,
    })
    .r_animate({
        opacity: '[0~1]',
        duration: 2000,
    });
//...
```

---

#### 范例2：缩放

<img src="https://github.com/r1ader/r_animate/blob/main/image/example_2_cn.gif" alt="example_2_cn">

您可以在 Playground 中 [查看并运行全部代码](https://stackblitz.com/edit/vue-zpshvy)

或者（ 由于网络原因无法访问 Playground ）

也可以在 Github 中 [查看全部代码](https://github.com/r1ader/r_animate/blob/main/code/example_2.vue)

```javascript
//...
// 关键代码
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

#### 范例3：掉落模拟

<img src="https://github.com/r1ader/r_animate/blob/main/image/example_3_cn.gif" alt="example_3_cn">

您可以在 Playground 中 [查看并运行全部代码](https://stackblitz.com/edit/vue-fdkv5z)

或者（ 由于网络原因无法访问 Playground ）

也可以在 Github 中 [查看全部代码](https://github.com/r1ader/r_animate/blob/main/code/example_3.vue)

```javascript
//...
// 关键代码
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
