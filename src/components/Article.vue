<template>
  <div class="articleContainer">
    <div id="article" v-for="article in articles" v-bind:key="article.id">
      <p>{{ article.title }}</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  template: '<span>id: {{ $route.params.id }}</span>',
  data: function () {
    return {
      articles: {
        article1: {title: '雨の日のおつかい'},
        article2: {title: 'あの人の謎'},
        article3: {title: 'どこへでもいきたい'},
        article4: {title: '青春の1ページ'},
        article5: {title: '明日の晩ごはん'},
        article6: {title: '餃子とチャーハン'}
      }
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
