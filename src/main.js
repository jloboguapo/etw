/*
|--------------------------------------------------------------------------
| Start the App.
|--------------------------------------------------------------------------
|
| This will start the application by creating a vue.js instance
| and will pull in the app modules and router.
|
*/

import axios from 'axios'
import lodash from 'lodash'
import router from './router'
import ScrollReveal from 'scrollreveal'
import Vue from 'vue'
import vueScript2 from 'vue-script2'

import Wrapper from './views/wrapper/wrapper.vue'

/**
 * Turn off for production.
 *
 * This is to show helpful tips in development
 * mode. Turn off in production.
 */
Vue.config.productionTip = false

/**
 * Mount Axios globally.
 *
 * For http request.
 */
Vue.prototype.axios = axios

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
