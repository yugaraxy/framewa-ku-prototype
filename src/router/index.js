import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/components/Article'
import Page from '@/components/Page'
import MyPage from '@/components/MyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles/:id',
      component: Article,
      children: [
        {
          path: 'pages/:page_num',
          component: Page
        }
      ]
    },
    {
      path: '/articles/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        sub: Article
      }
    },
    {
      path: '/articles',
      name: 'Article',
      component: Article
    },
    {
      path: '/mypage',
      name: 'MyPage',
      components: {
        default: MyPage,
        sub: HelloWorld
      }
    },
    {
      path: '/top',
      redirect: '/'
    }
  ]
})
