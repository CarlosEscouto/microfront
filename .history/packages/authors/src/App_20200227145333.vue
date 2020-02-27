<template>
  <div class="authors">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Authors"/> -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EssWindow from './components/EssWindow'

export default {
  name: 'Authors',
  components: {
    HelloWorld,
    EssWindow
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
