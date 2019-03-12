import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import lists from '@/components/article_lists.vue'
import add from '@/components/add_article.vue'
import preview from '@/components/preview'
import tag  from '@/components/tag'
import recommand from '@/components/recommand'

Vue.use(Router)
const router =  new Router({
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
    },
    {
      path:'/recommand',
      name:'recommand',
      component:recommand
    }
  ]
})

router.beforeEach((to,form,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})
export default router
