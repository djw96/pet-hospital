import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/index',
      component: Index
    }
  ]
})
