import Vue from 'vue'
import Router from 'vue-router'
import FortuneWheel from '@/pages/FortuneWheel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FortuneWheel',
      component: FortuneWheel
    }
  ]
})
