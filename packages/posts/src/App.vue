<template>
  <div class="posts">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Posts"/> -->
    <window v-for="window in windows" :key="window" :id="'posts' + window"></window>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Window from './components/Window.vue'

export default {
  name: 'Posts',
  mounted() {
    this.eventStorage();
  },
  data() {
    return {
      windows: [1],
    }
  },
  components: {
    // HelloWorld,
    Window
  },
  methods: {
    eventStorage() {
      window.addEventListener('storage', () => {
        this.windows.push(window.localStorage.getItem('posts'));
      });
    },

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
