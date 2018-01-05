/*
|--------------------------------------------------------------------------
| All routes
|--------------------------------------------------------------------------
|
| All routes for the front-end application.
|
*/

import Vue from 'vue'
import Router from 'vue-router'

const About = () => import('@/views/about/about.vue')
const Contact = () => import('@/views/contact/contact.vue')
const CustomerAgreement = () => import('@/views/customer-agreement/customer-agreement.vue')
const Home = () => import('@/views/home/home.vue')
const NotFound = () => import('@/views/404/404.vue')
const Privacy = () => import('@/views/privacy/privacy.vue')
const Resources = () => import('@/views/resources/resources.vue')
const Services = () => import('@/views/services/services.vue')
const Software = () => import('@/views/software/software.vue')

/**
* Tell Vue to use the vue-router.
*
* Tells the app to utilize the router.
*/
Vue.use(Router)

/**
* Container for routes
* @type {Array}
*/
let routes = [

  {
    path: '/home',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/resources',
    name: 'resources',
    component: Resources
  },

  {
    path: '/software',
    name: 'software',
    component: Software
  },

  {
    path: '/services',
    name: 'services',
    component: Services
  },

  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

  {
    path: '/customer-agreement',
    name: 'customer-agreement',
    component: CustomerAgreement
  },

  {
    path: '/user-agreement',
    name: 'user-agreement',
    component: CustomerAgreement
  },

  // For the home page
  {
    path: '/',
    redirect: { name: 'home' }
  },

  // Catch All, 404
  {
    path: '*',
    component: NotFound
  }
]

export default new Router({
  routes,
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
