<template>
  <div class="navbar">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="NAVBAR"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Posts',
  components: {
    HelloWorld
  }
}
</script>

<style>
.posts {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
