import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout/Layout'
import index from '@/page/index'
import populationAgeing from '@/page/population-ageing'
import populationDevelopment from '@/page/population-development'
import populationEmployment from '@/page/population-employment'
import populationQuality from '@/page/population-quality'
import populationStructure from '@/page/population-structure'
import populationTotal from '@/page/population-total'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },

    {
      path:'/index',
      component: Layout,
      children:[
        {
          name:'index',
          path:'/index',
          component:index
        },
        {
          name:'populationAgeing',
          path:'/populationAgeing',
          component:populationAgeing
        },
        {
          name:'populationDevelopment',
          path:'/populationDevelopment',
          component:populationDevelopment
        },
        {
          name:'populationEmployment',
          path:'/populationEmployment',
          component:populationEmployment
        },
        {
          name:'populationQuality',
          path:'/populationQuality',
          component:populationQuality
        },
        {
          name:'populationStructure',
          path:'/populationStructure',
          component:populationStructure
        },
        {
          name:'populationTotal',
          path:'/populationTotal',
          component:populationTotal
        },
      ]
    },
  ]
})
