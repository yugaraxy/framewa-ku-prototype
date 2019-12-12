<template>
  <div id="readFrame">
    <p>This is ReadArticle page!</p>
    <p>・title: {{ this.article.key }}</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  created: async function () {
    var database = firebase.database()
    var article = await database.ref('artiles').orderByChild('id').equalTo(this.$route.params['id']).once('value').then(function (snapshot) {
      return snapshot.val()
    })
    this.article = article
    console.log(this.article)
  },
  data: function () {
    return {
      article: null
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
