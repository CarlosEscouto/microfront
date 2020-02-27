<template>
  <div class="authors">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Authors"/> -->
    <window :width="200" :height="200" title="Perfil"></window>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Window from './components/Window'

export default {
  name: 'Authors',
  components: {
    HelloWorld,
    Window
  }
}
</script>

<style>
.authors {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
