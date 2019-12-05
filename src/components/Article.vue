<template>
  <div>
    <div class="articleContainer">
      <div id="article" v-for="article in articles" v-bind:key="article.id">
        <p>{{ article.name }}<br>{{ article.time }}分</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  template: '<span>id: {{ $route.params.id }}</span>',
  created: function () {
    this.database = firebase.database()
    this.articles = this.database.ref('artiles')
    console.log(this.articles)
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
</style>
