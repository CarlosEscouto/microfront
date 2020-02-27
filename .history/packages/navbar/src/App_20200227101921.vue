<template>
  <div class="navbar">
    <ul>
      <li @click="authors">Autores</li>
      <li @click="">Posts</li>
    </ul>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="NAVBAR"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Navbar',
  components: {
    HelloWorld
  },
  methods: {
    authors() {
      console.log(this)
    }
  },
}
</script>

<style>
.navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar ul { list-style: none; }
.navbar ul li { display: inline-block; padding: 10px 20px; border: 1px solid #aaa; border-radius: 10px; }
</style>
