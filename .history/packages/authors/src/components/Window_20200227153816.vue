<template>
  <div class="window">
    <div class="header">
      <button class="btn"></button>
    </div>
    <div class="body">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Window',
  data() {
    return {}
  },
  methods: {
    //
  },
}
</script>
<style>
  .window{ width: 300px; height: 300px; box-shadow: 1px 0 0 #ccc; }
  .btn{ background-color: red; width: 18px; height: 18px; border-radius: 100%; border: none; }
</style>