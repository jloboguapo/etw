/*
|--------------------------------------------------------------------------
| Start the App.
|--------------------------------------------------------------------------
|
| This will start the application by creating a vue.js instance
| and will pull in the app modules and router.
|
*/

import $ from 'jquery'
import lodash from 'lodash'
import router from './router'
import ScrollReveal from 'scrollreveal'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueGtm from 'vue-gtm'
import vueScript2 from 'vue-script2'

import Wrapper from './views/wrapper/wrapper.vue'

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features.
 */
window.$ = window.jQuery = $

/**
 * Turn off for production.
 *
 * This is to show helpful tips in development
 * mode. Turn off in production.
 */
Vue.config.productionTip = false

/**
 * Mount lodash globally.
 *
 * This allows you to access lodash function anywhere
 * in the app via "_."".
 */
Vue.prototype._ = lodash

/**
 * Mount ScrollReveal globally.
 *
 * This allows you animate items onto the page
 */
Vue.prototype.scrollReveal = ScrollReveal({ reset: true })

/**
 * For loading script tags in the templates
 */
Vue.use(vueScript2)

/**
 * Google analytics
 *
 * https://github.com/MatteoGabriele/vue-analytics
 */
Vue.use(VueAnalytics, {
  id: 'UA-76992300-1',
  router
})

/**
 * Google Tag Manager
 *
 * https://github.com/mib200/vue-gtm
 */
Vue.use(VueGtm, {
  vueRouter: router
})

/**
 * Vue instance.
 *
 * Start the applicaton.
 */
 /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<wrapper/>',
  components: { Wrapper }
})
