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
<style >
  .window{ width: 300px; height: 300px; box-shadow: 1px 1px 1px #ccc;}
  .btn{ background-color: red; width: 30px; height: 30px; border-radius: 100% }
</style>