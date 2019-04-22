import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')
const CustomerAgreement = () => import('@/views/CustomerAgreement.vue')
const CustomerSuccess = () => import('@/views/CustomerSuccess.vue')
const Events = () => import('@/views/Events.vue')
const Home = () => import('@/views/Home.vue')
const MostImportantNumber = () => import('@/views/MostImportantNumber.vue')
const KnowledgeCenter = () => import('@/views/KnowledgeCenter.vue')
const NotFound = () => import('@/views/404.vue')
const Privacy = () => import('@/views/Privacy.vue')
const Services = () => import('@/views/Services.vue')
const Software = () => import('@/views/Software.vue')
const UserAgreement = () => import('@/views/UserAgreement.vue')

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

    {
      path: '/customer-agreement',
      name: 'customerAgreement',
      component: CustomerAgreement
    },

    {
      path: '/customer-success',
      name: 'customerSuccess',
      component: CustomerSuccess
    },

    {
      path: '/events',
      name: 'events',
      component: Events
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
      path: '/MIN',
      name: 'most-important-number',
      component: MostImportantNumber
    },

    {
      path: '/knowledge-center',
      name: 'knowledgeCenter',
      component: KnowledgeCenter
    },

    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },

    {
      path: '/services',
      name: 'services',
      component: Services
    },

    {
      path: '/software',
      name: 'software',
      component: Software
    },

    {
      path: '/user-agreement',
      name: 'userAgreement',
      component: UserAgreement
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
  ],
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
