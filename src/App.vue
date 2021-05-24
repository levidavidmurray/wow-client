<template>
  <div id="app">
    <div class="split-container">
      <div id="nav">
        <app-router/>
      </div>
      <div class="selected-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import AppRouter from '@/components/AppRouter.vue';

export default {
  name: 'App',
  components: {
    AppRouter
  }
}
</script>

<style lang="scss">
@import "./scss/variables";

html, body {
  padding: 0;
  margin: 0;
  background: $bg-blue-dark;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100vh;
  width: 100%;
  padding: 64px 96px 0 96px;
  overflow: hidden;
  position: relative;
  z-index: 10;

  .split-container {
    display: flex;
    height: 100%;
    max-width: 1700px;

    #nav {
      min-width: 324px;
      max-width: 324px;
      position: relative;
      z-index: 1;
    }

  }

}

</style>
