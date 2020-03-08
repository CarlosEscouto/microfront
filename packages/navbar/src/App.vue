<template>
  <div class="navbar">

    <router-link class="links" to="/authors">Autores</router-link>
    <router-link class="links" to="/posts">Posts</router-link>
    <button class="links" @click="addCount()"> Adiciona no contador </button>
    {{ count }}
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
  computed: {
    // A leitura está com problema, estou usando o state direto, provavelmente é isso. Questão de reatividade
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    authors() {
      this.$router.push('/authors')
    },
    posts() {
      this.$router.push('/posts')
    },
    // TESTE DO VUEX
    addCount() {
      this.$store.commit('increment')
    },
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

.links { background-color: #fff; cursor: pointer; text-decoration: none; color: #444; display: inline-block; padding: 10px 20px; border: 1px solid #aaa; border-radius: 10px; outline: none; }
.links:hover { transform: translateY(-3px); }

</style>
