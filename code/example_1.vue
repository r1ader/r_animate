<template>
  <div id="app">
    <div ref="circle" class="circle"></div>
  </div>
</template>

<script>
import R_director from 'r_animate';

export default {
  name: 'App',
  mounted() {
    const director = new R_director();
    director.take(this);

    this.$refs.circle
        .r_animate({
          opacity: '[1~0]',
          duration: 2000,
        })
        .r_animate({
          opacity: '[0~1]',
          duration: 2000,
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
  margin: 60px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: blue;
}
</style>
