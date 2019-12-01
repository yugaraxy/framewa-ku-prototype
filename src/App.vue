<template>
  <div id="app">
    <router-link to='/top'>
      <img src="./assets/logo1.png" id="logo">
    </router-link>

    <div>
      <router-link class="button" id="showButton" to='article'>読む</router-link>
      <router-link class="button" id="showWriter" to='articleWriter'>書く</router-link>
    </div>

    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
      <router-view name="modal"></router-view>
    </modal>
    <router-view name="default"></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  created: function () {
    this.database = firebase.database()
    this.articles = this.database.ref('articles')

    var _this = this
    this.articles.on('value', function (snapshot) {
      _this.articles = snapshot.val()
    })
  },
  data: function () {
    return {
      showModal: false,
      database: null,
      articles: null
    }
  }
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

#logo {
  width: 75%;
}

.button {
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  margin: 10px auto;
  width: 75%;
  border: 5px solid black;
  padding: 10px 20px;
  font-size: 30px;
  background-color: white;
  color: black;
}
</style>
