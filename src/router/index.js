import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/pie',
    name: 'Pie',
    component: () => import( '../views/Pie.vue')
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import( '../views/Bar.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import( '../views/EventList.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import( '../views/NoticeList.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( '../views/BlogList.vue')
  },




  
  {
    path: '/guide',
    name: 'Guide',
    component: () => import( '../guide/Guide.vue')
  },
  {
    path: '/guide/text',
    name: 'Text',
    component: () => import( '../guide/Text.vue')
  },
  {
    path: '/guide/color',
    name: 'Color',
    component: () => import( '../guide/Color.vue')
  },
  {
    path: '/guide/button',
    name: 'Button',
    component: () => import( '../guide/Button.vue')
  },
  {
    path: '/guide/form',
    name: 'Form',
    component: () => import( '../guide/Form.vue') 
  },
  {
    path: '/guide/icon',
    name: 'Icon', 
    component: () => import( '../guide/Icon.vue') 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
