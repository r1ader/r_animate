# r_animate

一个能帮您更方便地在 `vue` 项目中制作 `css` 动画的简单工具，以及，不止 `css` 动画

[English](https://github.com/r1ader/r_animate/blob/main/README.md) | 中文

[![Downloads][npm-downloads-src]][npm-downloads-href]
[![Version][npm-version-src]][npm-version-href]

[npm-downloads-src]: https://img.shields.io/npm/dt/r_animate.svg?style=flat&color=darkgreen

[npm-downloads-href]: https://www.npmjs.com/package/r_animate

[npm-version-src]: https://img.shields.io/npm/v/r_animate/latest.svg?style=flat&color=darkorange&label=version

[npm-version-href]: https://www.npmjs.com/package/r_animate

## 安装

```bash
npm install --save r_animate 
```

## 语法

#### 范例1：渐入渐出 

点此查看 [全部代码](https://stackblitz.com/edit/vue-ufvvux)

```javascript
  ...
  this.$refs.circle
      .r_animate({
        opacity: '[1~0]',
        duration: 2000,
      })
      .r_animate({
        opacity: '[0~1]',
        duration: 2000,
      });
  ...
```
<img src="https://github.com/r1ader/r_animate/blob/main/image/example_1_cn.gif" alt="example_1_cn">
