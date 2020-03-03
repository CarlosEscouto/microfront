<template>
  <div class="window posts" id="draggable-posts">
    <div class="header">
      <button class="btn" @click="unMount()"></button>
    </div>
    <div class="body">
      Projeto posts
    </div>
  </div>
</template>
<script>
export default {
  name: 'Window',
  mounted() {
    $( "#draggable-posts" ).draggable();

    $('.window.posts').click(function() {
      $('.window').css('z-index', '1')
      $('.window.posts').css('z-index', '2')
    })
  },
  data() {
    return {}
  },
  methods: {
    unMount() {
      $('#posts').html('')
      if (this.$router.history.current.path !== '/') this.$router.push('/')
    }
  },
}
</script>
<style>
  .window.posts{ width: 300px; height: 300px; position: absolute; left: calc(50% - 150px); top: calc(50% - 150px); box-shadow: 0 0 1px 1px #ccc; background-color: #fefefe; padding: 15px; border-radius: 8px; }
  .window.posts .btn{ background-color: red; width: 18px; height: 18px; border-radius: 100%; border: none; float: right; }
</style>