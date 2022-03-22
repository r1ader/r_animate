# r_animate
an easy tool to make css animation

English | [中文](https://github.com/r1ader/r_animate/blob/main/README_CN.md)

[![Downloads][npm-downloads-src]][npm-downloads-href]
[![Version][npm-version-src]][npm-version-href]

[npm-downloads-src]: https://img.shields.io/npm/dt/r_animate.svg?style=flat&color=darkgreen
[npm-downloads-href]: https://www.npmjs.com/package/r_animate

[npm-version-src]: https://img.shields.io/npm/v/r_animate/latest.svg?style=flat&color=darkorange&label=version
[npm-version-href]: https://www.npmjs.com/package/r_animate

## Installation

```bash
npm install --save r_animate 
```

## a sample tutorial base on `vue` 

```vue

<template>
  <div>
    <div ref="visible_div">
      I'm gonna be invisible
    </div>
  </div>
</template>

<script>
import R_director from "r_animate";

export default {
  // ...
  mounted() {
    // the next two code is necessary in a vue instance
    // just image that a director should take the studio in control
    // so that everything will be going on smoothly
    const r_director = new R_director()
    r_director.take(this)

    const { visible_div } = this.$refs
    visible_div.r_animate({
      opacity: '[1~0]'
    })
  }
}
</script>
```

run the code above ，you can see the animation of `I'm gonna be invisible`