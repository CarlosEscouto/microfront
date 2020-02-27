<template>
  <div class="navbar">

    <router-link class="links" to="/authors">Autores</router-link>
    <router-link class="links" to="/posts">Posts</router-link>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="NAVBAR"/> -->
    <router-view></router-view>
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
      this.$router.push('/authors')
    },
    posts() {
      this.$router.push('/posts')
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

.links { text-decoration: none; display: inline-block; padding: 10px 20px; border: 1px solid #aaa; border-radius: 10px; }
</style>
