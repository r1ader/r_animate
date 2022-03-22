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

## 基于 `vue` 的简单的范例

```vue

<template>
  <div>
    <div ref="visible_div">
      我要隐身了
    </div>
  </div>
</template>

<script>
import R_director from "r_animate";

export default {
  // ...
  mounted() {
    const r_director = new R_director() // 实例化一个导演类
    r_director.take(this) // 导演需要接管现场，$refs 中的 element 才能开始动画

    const { visible_div } = this.$refs
    visible_div.r_animate({
      opacity: '[1~0]'
    })
  }
}
</script>
```

刷新页面，可以看到 `我要隐身了` 的渐出动画。