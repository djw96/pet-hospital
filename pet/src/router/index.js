import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Index from '@/components/Index'
import Ele from '@/components/Ele'
import Case from '@/components/Case'
import CaseEntity from '@/components/CaseEntity'
import cosplay from '@/components/cosplay'

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
    },
    {
      path: '/ele/:id',
      component: Ele
    },
    {
      path: '/caseentity/:id',
      component: CaseEntity
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/cosplay',
      component: cosplay
    }
  ]
})
