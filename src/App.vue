<template>
  <div id="app">
    <img src="./assets/logo1.png" id="logo">

    <div>
      <button class="button" id="showButton" @click="showArticles">読む</button>
      <button class="button" id="showWriter" @click="writeArticles">書く</button>
    </div>

    <!-- reading mode -->
    <div id="articles" style="display: none;">
      <router-view name="sub" />
      <button class="button">もっと読む？</button>
    </div>

    <!-- writing mode -->
    <div id="writer" style="display: none;">
      <router-view/>
    </div>

    <div>
      <p style="font-size: 20px;">枠々小説へようこそ!</p>
      <p>枠々小説の使い方はこちら</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showArticles: function () {
      var showButton = document.getElementById('showButton')
      showButton.style.backgroundColor = '#E6E6E6'

      var writer = document.getElementById('writer')
      if (writer.style.display !== 'none') {
        writer.style.display = 'none'

        var showWriter = document.getElementById('showWriter')
        showWriter.style.backgroundColor = 'white'
      }

      var articles = document.getElementById('articles')
      articles.style.display = 'block'
    },
    writeArticles: function () {
      var showWriter = document.getElementById('showWriter')
      showWriter.style.backgroundColor = '#E6E6E6'

      var articles = document.getElementById('articles')
      if (articles.style.display !== 'none') {
        articles.style.display = 'none'

        var showButton = document.getElementById('showButton')
        showButton.style.backgroundColor = 'white'
      }

      var writer = document.getElementById('writer')
      writer.style.display = 'block'
    }
  }
}
</script>

<style>
@media screen and (min-width:0px) {
  body {
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

#logo {
  width: 75%;
}

.button {
  display: block;
  margin: 10px auto;
  width: 75%;
  border: 5px solid black;
  padding: 10px 20px;
  font-size: 30px;
  background-color: white;
}
</style>
