<template>
  <div>
    <!-- Dados locais -->
    <ul v-for="item in itens" :key="item">
      <li>{{ item }}</li>
    </ul>
    <button @click="reduce()">Tira um da lista</button>
    <!-- Dados locais -->

    <!-- teste do vuex -->
    <p>{{count}}</p>
    <button @click="addCount()">Adiciona no contador</button>
    <!-- teste do vuex -->

  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "ListPosts",
  mounted() {
    console.log(this.$store)
  },
  data() {
    return {
      itens: [
        'Carros',
        'Motos',
        'Bicicletas',
        'E outras coisas'
      ]
    };
  },
  computed: {
    // ...mapGetters(['count']),
    // A leitura está com problema, estou usando o state direto, provavelmente é isso. Questão de reatividade
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    reduce() {
      this.itens.pop()
    },
    // Teste do vuex
    addCount() {
      this.$store.commit('increment')
    },
  }
};
</script>