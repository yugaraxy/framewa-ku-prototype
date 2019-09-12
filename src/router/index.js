import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import ArticleWriter from '@/components/ArticleWriter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: ArticleWriter,
        sub: Article
      }
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/articlewriter',
      name: 'ArticleWriter',
      component: ArticleWriter
    },
    {
      path: '/top',
      redirect: '/'
    }
  ]
})
