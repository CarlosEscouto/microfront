<template>
  <div class="window" id="draggable-autores">
    <div class="header">
      <button class="btn"></button>
    </div>
    <div class="body">
      Projeto autores
    </div>
  </div>
</template>
<script>
export default {
  name: 'Window',
  mounted() {
    $( "#draggable-autores" ).draggable();
  },
  data() {
    return {}
  },
  methods: {
    //
  },
}
</script>
<style>
  .window{ width: 300px; height: 300px; box-shadow: 0 0 1px 1px #ccc; background-color: #fefefe; padding: 15px; border-radius: 8px; }
  .btn{ background-color: red; width: 18px; height: 18px; border-radius: 100%; border: none; float: right; }
</style>