<h1 align="center">r_animate.js</h1>


<h4 align="center">

[![Downloads][npm-downloads-src]][npm-downloads-href]
[![Version][npm-version-src]][npm-version-href]

[npm-downloads-src]: https://img.shields.io/npm/dt/r_animate.svg?style=flat&color=darkgreen

[npm-downloads-href]: https://www.npmjs.com/package/r_animate

[npm-version-src]: https://img.shields.io/npm/v/r_animate/latest.svg?style=flat&color=darkorange&label=version

[npm-version-href]: https://www.npmjs.com/package/r_animate



</h4>

<h3 align="center">以函数式编程的方式制作动画</h3>

---

[English](https://github.com/r1ader/r_animate/blob/main/doc/doucment.md) | 中文

请悉知： 本文档正在编写中...

---

# 介绍

`r_animate.js` 使得我们可以以函数式编程的方式制作动画。

`r_animate.js` 中的绝大多数方法，都采用下图这种 `Things`.`do`(`something`) 的形式

<img src="..\image\functionalprogramming.gif" width="300px"/>

以最基本的位移动画为例： 

若 `actor` 为动画的主体 , 则实际代码为

```javascript
    import {act} from 'r_animate'

    actor.r_animate(act.FADE_OUT)
```

在上面的这一行代码中，存在三个对象 `actor`, `r_animate`, `act.FADE_OUT`， 以下，将分别解释这三个对象。

- [actor](#actor)
- [r_animate](#r_animate)
- [act.FADE_OUT](#actfade_out)

## actor

在 `r_animate.js` 中， `actor` 是一个<font color="red">注册过的</font>DOM `Element` 对象。

DOM `Element` 对象很好理解，即

 - 原生的 `doument.getElementById`,
 - vue中的 `this.$refs`
 - ...
 
 等方法获取到的对象，

那么<font color="red">注册过的</font>又是什么呢？

### r_register

请想象一下，在一个演艺片场中，存在很多人员: <font color="red">演员</font>，<font color="red">导演</font>，<font color="red">助理</font>等等，但能上场演出的，只有<font color="red">演员</font>。

所以相应的，一个普通的 `Element` 对象，也需要注册为`Actor`，才能开始动画。

注册代码如下：


```javascript
import { r_register } from 'r_animate'

const actor = document.getElementById('actor_id')

r_register(actor)
```

或者，在 <font color="green">**`vue`**</font> 中，您可以注册一个导演类，在 <font color="green">**`mounted`**</font> 使用它的 `take` 方法，就可以自动注册 <font color="green">**`$refs`**</font> 中的所有 `Element` 对象了


```javascript
import { Director } from 'r_animate'

export default {
    // ...
    mounted(){
        new Director().take(this)
    }
}
```

在注册之后，`Element` 对象便可以开始动画。

您可以调用 `Element` 对象的 `r_animate` 方法开始动画。

关于 `r_animate` 的详情，可以继续查看 👇


## r_animate




## act.FADE_OUT
