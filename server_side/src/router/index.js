import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import lists from '@/components/article_lists.vue'
import add from '@/components/add_article.vue'
import preview from '@/components/preview'
import tag  from '@/components/tag'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:"管理"
      }
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    },
    {
      path: '/add/:id',
      name: 'add',
      component: add
    },
    {
      path: '/preview/:id',
      name: 'preview',
      component: preview
    },
    {
      path:'/tag',
      name:'tag',
      component:tag
    }
  ]
})
