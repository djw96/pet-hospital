import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Index from '@/components/Index'
import Ele from '@/components/Ele'
import Case from '@/components/Case'
import CaseEntity from '@/components/CaseEntity'
import cosplay from '@/components/cosplay'
import SpecCase from '@/components/SpecCase'
import Exam from '@/components/Exam'
import Test from '@/components/test'

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
      path: '/ele',
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
      path: '/speccase/:id',
      component: SpecCase
    },
    {
      path: '/cosplay',
      component: cosplay
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/exam',
      component: Exam,
      meta: {
        requireAuth: true
      }
    }
  ]
})
