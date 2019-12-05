<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@media screen and (min-width:0px) {
  body {
    height: 100%;
    margin: 10px;
    border: 5px solid black;
  }
}

@media screen and (min-width:480px) {
  body {
    width: 450px;
    margin: 30px auto;
    border: 5px solid black;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, 'MS Pゴシック';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
