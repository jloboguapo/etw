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
const UserAgreement = () => import('@/views/user-agreement/user-agreement.vue')

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
    component: Home,
    meta: {
      title: 'ETW.com: Improving Alignment to get Better Results',
      metaTags: [
        {
          name: 'og:title',
          content: 'ETW.com: Improving Alignment to get Better Results'
        },
        {
          name: 'description',
          content: 'Want to get results quickly? Execute to Win (ETW) is a company that helps organizations improve alignment to get results faster, communicate better and develop more effective leaders. ETW’s proven approach to leadership, strategy and culture can quickly align your organization and drive success for your business.'
        },
        {
          name: 'og:description',
          content: 'Want to get results quickly? Execute to Win (ETW) is a company that helps organizations improve alignment to get results faster, communicate better and develop more effective leaders. ETW’s proven approach to leadership, strategy and culture can quickly align your organization and drive success for your business.'
        }
      ]
    }
  },

  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'About - ETW.com'
        },
        {
          name: 'description',
          content: 'About ETW.  Execute to Win (ETW) is a consulting company that helps organizations improve alignment to get better results.'
        },
        {
          name: 'og:description',
          content: 'About ETW.  Execute to Win (ETW) is a consulting company that helps organizations improve alignment to get better results.'
        }
      ]
    }
  },

  {
    path: '/resources',
    name: 'resources',
    component: Resources,
    meta: {
      title: 'Resources - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'Resources - ETW.com'
        },
        {
          name: 'description',
          content: 'Insights, Workshops and Implementation resources to help you improve alignment.'
        },
        {
          name: 'og:description',
          content: 'Insights, Workshops and Implementation resources to help you improve alignment.'
        }
      ]
    }
  },

  {
    path: '/software',
    name: 'software',
    component: Software,
    meta: {
      title: 'Software Products - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'Software Products - ETW.com'
        },
        {
          name: 'description',
          content: 'ETW Software helps align your employees with your strategy and intentional culture.'
        },
        {
          name: 'og:description',
          content: 'ETW Software helps align your employees with your strategy and intentional culture.'
        }
      ]
    }
  },

  {
    path: '/services',
    name: 'services',
    component: Services,
    meta: {
      title: 'Professional Services - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'Professional Services - ETW.com'
        },
        {
          name: 'description',
          content: 'ETW offers a wide range of consulting and professional services to better align your organization.'
        },
        {
          name: 'og:description',
          content: 'ETW offers a wide range of consulting and professional services to better align your organization.'
        }
      ]
    }
  },

  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy,
    meta: {
      title: 'Privacy Policy - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'Privacy Policy - ETW.com'
        },
        {
          name: 'description',
          content: 'Privacy Policy for ETW.com.'
        },
        {
          name: 'og:description',
          content: 'Privacy Policy for ETW.com.'
        }
      ]
    }
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact Us - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'Contact Us - ETW.com'
        },
        {
          name: 'description',
          content: 'Contact us to find out how we can help you.'
        },
        {
          name: 'og:description',
          content: 'Contact us to find out how we can help you.'
        }
      ]
    }
  },

  {
    path: '/customer-agreement',
    name: 'customer-agreement',
    component: CustomerAgreement,
    meta: {
      title: 'Customer Agreement - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'Customer Agreement - ETW.com'
        },
        {
          name: 'description',
          content: 'Customer Agreement for ETW.com.'
        },
        {
          name: 'og:description',
          content: 'Customer Agreement for ETW.com.'
        }
      ]
    }
  },

  {
    path: '/user-agreement',
    name: 'user-agreement',
    component: UserAgreement,
    meta: {
      title: 'User Agreement - ETW.com',
      metaTags: [
        {
          name: 'og:title',
          content: 'User Agreement - ETW.com'
        },
        {
          name: 'description',
          content: 'User Agreement for ETW.com.'
        },
        {
          name: 'og:description',
          content: 'User Agreement for ETW.com.'
        }
      ]
    }
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

const router = new Router({
  routes,
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
