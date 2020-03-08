<template>
  <div class="window posts" :id="'draggable-' + id">

    <div class="header">
      <button class="btn" @click="unMount()"></button>
    </div>

    <div class="body">
      Projeto posts
    </div>

    <list-posts></list-posts>

  </div>
</template>
<script>
import ListPosts from './List.vue';
export default {
  name: 'Window',
  components: {
    ListPosts,
  },
  props: {
    id: String
  },
  mounted() {
    $( `#draggable-${this.id}` ).draggable();

    $('.window.posts').click(function() {
      $('.window').css('z-index', '1')
      $(`#draggable-${this.id}`).css('z-index', '2')
    })
  },
  data() {
    return {}
  },
  methods: {
    unMount() {
       $(`#draggable-${this.id}`).remove()
      if (this.$router.history.current.path !== '/') this.$router.push('/')
      if (document.querySelector('#posts div').childElementCount < 1) { $('#posts').html('') }
    }
  },
}
</script>
<style>
  .window.posts{ width: 300px; height: 300px; position: absolute; left: calc(50% - 150px); top: calc(50% - 150px); box-shadow: 0 0 1px 1px #ccc; background-color: #fefefe; padding: 15px; border-radius: 8px; }
  .window.posts .btn{ background-color: red; width: 18px; height: 18px; border-radius: 100%; border: none; float: right; }
</style>