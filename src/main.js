import $ from 'jquery'
import App from './App.vue'
import Meta from 'vue-meta'
import router from './router'
import ScrollReveal from 'scrollreveal'
import store from './store'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueYoutube from 'vue-youtube'

import './assets/styles/styles.scss'

Vue.config.productionTip = false

/**
 * For dynamic meta data from /store/meta.store.js
 */
Vue.use(Meta)

/**
 * We need jQuery for the Hubspot modal windows
 */
window.$ = window.jQuery = $

/**
 * Mount ScrollReveal globally.
 *
 * This allows you animate items onto the page
 */
Vue.prototype.scrollReveal = ScrollReveal({
  reset: true,
  distance: '10px'
})

Vue.use(VueYoutube)

/**
 * Google analytics
 */
Vue.use(VueAnalytics, {
  id: 'UA-76992300-1',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
