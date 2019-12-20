<template>
<section>
  <div id="readFrame">
    <p>This is ReadArticle page!</p>
    <p>title: {{ this.articleTitle }}</p>
    <p>author: {{ this.articleAuthor }}</p>
    <p>content: {{ this.articleContent }}</p>
    <router-link class="button" :to="{ name : 'renderArticle', param: { id: this.$route.params['id']} }">スタート</router-link>
  </div>
</section>
</template>

<script>
import firebase from 'firebase'

export default {
  created: async function () {
    var database = firebase.database()
    this.article = await database.ref('artiles').child(this.$route.params['id']).once('value').then(function (snapshot) {
      return snapshot.val()
    })
    this.articleTitle = this.article.name
    this.articleAuthor = this.article.author
    this.articleContent = this.article.content
  },
  data: function () {
    return {
      article: null,
      articleTitle: null,
      articleAuthor: null,
      articleContent: null
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
  margin-bottom: 10px;
}
</style>
