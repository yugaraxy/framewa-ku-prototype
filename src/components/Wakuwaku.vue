<template>
  <div>
    <router-link to='/top'>
      <img src="../assets/logo1.png" id="logo">
    </router-link>

    <div>
      <router-link class="button" id="showButton" to='/article'>読む</router-link>
      <router-link class="button" id="showWriter" to='/articleWriter'>書く</router-link>
    </div>

    <router-view name="default"/>
    <!--<router-view name="modal"/>-->
    <router-view name="Article"/>
    <router-view name="ArticleWriter"/>
    <router-view name="RenderArticle"/>
  </div>
</template>

<script>
export default {
  name: 'Wakuwaku',
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
