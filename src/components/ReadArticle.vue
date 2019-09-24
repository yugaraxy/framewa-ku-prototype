<template>
  <div id="readFrame">
    <p>This is ReadArticle page!</p>
    <p>・title: {{ title }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: '餃子とチャーハン'
    }
  }
}
</script>

<style>
#readFrame {
  border: 5px black solid;
  height: 400px;
  width: 72%;
  margin: auto;
}
</style>
