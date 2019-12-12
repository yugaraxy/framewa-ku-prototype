<template>
  <div id='writeSpace'>
      <p>クリエイター名</p>
      <input v-model="newArticleAuthor">
      <p>作品のタイトル</p>
      <input v-model="newArticleName">
      <p>クリエイター名: <br/>{{ newArticleAuthor }}</p>
      <p>作品のタイトル: <br />{{ newArticleName }}</p>
      <textarea v-model="newArticleContent"></textarea>
      <button @click='createNewArticleContent'>提出</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default{
  name: 'ArticleWriter',
  created: function () {
    this.database = firebase.database()
    this.articles = this.database.ref('artiles')
  },
  methods: {
    createNewArticleContent: function () {
      this.newArticleContent = this.newArticleContent.split('。')
      this.createArticle()
    },
    createRandomId: function () {
      var date = new Date()
      var nowTime = date.getTime()
      var randomString = Math.random().toString(36).slice(-8)
      console.log(randomString)
      return nowTime + randomString
    },
    createArticle: function () {
      if (this.newArticleName === '') { return }
      this.articles.push({
        id: this.createRandomId(),
        author: this.newArticleAuthor,
        name: this.newArticleName,
        time: this.newArticleTime,
        content: this.newArticleContent
      })
      this.newArticleName = ''
    }
  },
  data: function () {
    return {
      newArticleName: 'sample text',
      newArticleAuthor: '',
      newArticleContent: '',
      newArticleTime: ''
    }
  }
}
</script>

<style>
#writeSpace {
  margin: 10px auto;
  margin-bottom: 30px;
  width: 75%;
  height: 400px;
  border: 5px solid black;
  box-sizing: border-box;
}
</style>
