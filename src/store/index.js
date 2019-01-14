import Vue from 'vue'
import Vuex from 'vuex'

import meta from './meta.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meta
  }
})
