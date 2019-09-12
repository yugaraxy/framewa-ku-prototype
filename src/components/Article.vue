<template>
  <div class="articleContainer">
    <div id="article" v-for="article in articles" v-bind:key="article.id">
      <p>{{ article.title }}<br>{{ article.time }}分</p>
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
        article1: {
          title: '何処へでも行きたい',
          time: '五',
          sentences: [
            '「じゃあ、アイルランドはどうですか？ダブリンは良い街ですよ。少し雨が多いけど...」',
            '留学先を探していた時、そう提案された。',
            '他の候補地はどこも魅力歴なビーチやナイトクラブが自慢で、開放的に...'
          ]
        },
        article2: {
          title: '餃子とチャーハン',
          time: '三',
          sentences: [
            '「じゃあ、アイルランドはどうですか？ダブリンは良い街ですよ。少し雨が多いけど...」',
            '留学先を探していた時、そう提案された。'
          ]
        },
        article3: {
          title: 'あの日、何が起きたのか',
          time: '五',
          sentences: [
            '「雨の多い街、ダブリン」',
            'なんと心地よい響きだろう。',
            '雨は嫌われ者かもしれないが...'
          ]
        }
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
