import Vue from 'vue'
import Router from 'vue-router'
import Wakuwaku from '@/components/Wakuwaku'
// import Explanation from '@/components/Explanation'
import Article from '@/components/Article'
import ArticleWriter from '@/components/ArticleWriter'
import ReadArticle from '@/components/ReadArticle'
import RenderArticle from '@/components/RenderArticle'
// import ReadModal from '@/components/ReadModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Wakuwaku,
      children: [{
        path: '/:id/readArticle/',
        name: 'readArticle',
        component: ReadArticle
      },
      {
        path: '/:id/renderArticle',
        name: 'renderArticle',
        component: RenderArticle
      },
      {
        path: 'article',
        name: 'Article',
        component: Article
      },
      {
        path: 'articleWriter',
        name: 'ArticleWriter',
        component: ArticleWriter
      },
      {
        path: 'top',
        redirect: '/'
      }]
    }
  ]
})
