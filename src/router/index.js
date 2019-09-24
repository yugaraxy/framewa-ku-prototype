import Vue from 'vue'
import Router from 'vue-router'
import Explanation from '@/components/Explanation'
import Article from '@/components/Article'
import ArticleWriter from '@/components/ArticleWriter'
import ReadArticle from '@/components/ReadArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Explanation
      },
      children: [
        {
          path: '',
          component: ReadArticle
        }
      ]
    },
    {
      path: '/readArticle/:id',
      name: 'readArticle',
      component: ReadArticle
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
