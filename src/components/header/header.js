/*
|--------------------------------------------------------------------------
| Page header.
|--------------------------------------------------------------------------
|
| The branding and menu.
|
*/

import SideMenu from '@/components/side-menu/side-menu.vue'

export default {

  name: 'header',

  components: {
    SideMenu
  },

  data () {
    return {

      /**
       * To show/hide he push menu
       * @type {Boolean}
       */
      isActiveMenu: false,

      /**
       * To track page scroll
       * @type {Boolean}
       */
      isScroll: false,

      /**
       * For window scroll events
       * @type {debounce}
       */
      lazyHandleScroll: _.debounce(this.handleScroll, 20)

    }
  },

  created () {
    window.addEventListener('scroll', this.lazyHandleScroll)
  },

  methods: {

    /**
    * For adding the border bottom to header on scroll
    */
    handleScroll () {
      this.isScroll = window.scrollY != 0
    },

    /**
     * Show/Hide side menu
     */
    toggleMenu () {
      this.isActiveMenu = !this.isActiveMenu
    }

  }
}
