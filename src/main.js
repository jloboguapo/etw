/*
|--------------------------------------------------------------------------
| Start the App.
|--------------------------------------------------------------------------
|
| This will start the application by creating a vue.js instance
| and will pull in the app modules and router.
|
*/

import lodash from 'lodash'
import ScrollReveal from 'scrollreveal'
import router from './router'
import Vue from 'vue'

import Wrapper from './views/wrapper/wrapper.vue'

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
