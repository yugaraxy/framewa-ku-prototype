<template>
  <div>
    <div class="articleContainer">
      <div id="article" v-for="(article, name) in articles" v-bind:key="article.id">
        <router-link class="articles" :to="{ name : 'readArticle', params : { id: name }}" v-on:click="console.log(article)">
          <p>{{ article.name }}<br>by {{ article.author }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  created: async function () {
    this.database = firebase.database()
    this.articles = await this.database.ref('artiles').once('value').then(function (snapshot) {
      console.log(snapshot.val())
      return snapshot.val()
    })
  },
  data: function () {
    return {
      database: null,
      articles: null
    }
  }
}
</script>

<style>
.color {
  color: blue
}

.articleContainer {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(30px, 1fr));
  width: 75%;
  margin: 10px auto;
  padding: 0px;

}

#article {
  writing-mode: vertical-rl;
  border: 5px solid black;
  height: 200px;
  text-align: center;
}

.articles {
  text-decoration: none;
  color: black;
}
</style>
