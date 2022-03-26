<template>
  <div id="app">
    <div ref="circle" class="circle"></div>
    <div ref="shadow" class="circle"></div>
  </div>
</template>

<script>
import R_director from 'r_animate';

export default {
  name: 'App',
  mounted() {
    const director = new R_director();
    director.take(this);

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
          interpolation: 'easeInQuad',
        })
        .r_animate({
          opacity: '[0~1]',
          transform: 'translateY(-50px) scale([0.1~1]) scaleY(0.1)',
          duration: 300,
          interpolation: 'easeOutQuad',
          reverse: true,
        })
        .r_animate({
          opacity: '[0~1]',
          transform: 'translateY(-50px) scale([0.1~1]) scaleY(0.1)',
          duration: 300,
          interpolation: 'easeInQuad',
        })
        //
        .r_animate({
          opacity: '[0.5~1]',
          transform: 'translateY(-50px) scale([0.3~1]) scaleY(0.1)',
          duration: 200,
          interpolation: 'easeOutQuad',
          reverse: true,
        })
        .r_animate({
          opacity: '[0.5~1]',
          transform: 'translateY(-50px) scale([0.3~1]) scaleY(0.1)',
          duration: 200,
          interpolation: 'easeInQuad',
        })
        .r_animate({
          opacity: '[0.7~1]',
          transform: 'translateY(-50px) scale([0.7~1]) scaleY(0.1)',
          duration: 100,
          interpolation: 'easeOutQuad',
          reverse: true,
        })
        .r_animate({
          opacity: '[0.7~1]',
          transform: 'translateY(-50px) scale([0.7~1]) scaleY(0.1)',
          duration: 100,
          interpolation: 'easeInQuad',
        })
        .r_animate({
          opacity: '[0.9~1]',
          transform: 'translateY(-50px) scale([0.9~1]) scaleY(0.1)',
          duration: 50,
          interpolation: 'easeOutQuad',
          reverse: true,
        })
        .r_animate({
          opacity: '[0.9~1]',
          transform: 'translateY(-50px) scale([0.9~1]) scaleY(0.1)',
          duration: 50,
          interpolation: 'easeInQuad',
        });
    this.$refs.circle
        .r_animate({
          transform: 'translateY([-200~0]px)',
          duration: 500,
          interpolation: 'easeInQuad',
        })
        .r_animate({
          transform: 'translateY([0~-100]px)',
          duration: 300,
          interpolation: 'easeOutQuad',
        })
        .r_animate({
          transform: 'translateY([-100~0]px)',
          duration: 300,
          interpolation: 'easeInQuad',
        })
        //
        .r_animate({
          transform: 'translateY([0~-50]px)',
          duration: 200,
          interpolation: 'easeOutQuad',
        })
        .r_animate({
          transform: 'translateY([-50~0]px)',
          duration: 200,
          interpolation: 'easeInQuad',
        })
        .r_animate({
          transform: 'translateY([0~-25]px)',
          duration: 100,
          interpolation: 'easeOutQuad',
        })
        .r_animate({
          transform: 'translateY([-25~0]px)',
          duration: 100,
          interpolation: 'easeInQuad',
        })
        .r_animate({
          transform: 'translateY([0~-12]px)',
          duration: 50,
          interpolation: 'easeOutQuad',
        })
        .r_animate({
          transform: 'translateY([-12~0]px)',
          duration: 50,
          interpolation: 'easeInQuad',
        });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 200px 0 0 50px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: rgba(0, 0, 255, 0.47);
}
</style>
