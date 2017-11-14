/*
|--------------------------------------------------------------------------
| Page header.
|--------------------------------------------------------------------------
|
| The branding and menu.
|
*/

export default {

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
      lazyHandleScroll: _.debounce(this.handleScroll, 20),

      /**
       * Current scrollY position
       * @type {number}
       */
      scrollY: 0,

      /**
       * For showing the menu
       * @type {Boolean}
       */
      isScrollUp: false,

      /**
       * For hiding the menu
       * @type {Boolean}
       */
      isScrollDown: false

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

      if (window.scrollY > 0) {
        this.isScrollDown = window.scrollY > this.scrollY
        this.isScrollUp = window.scrollY < this.scrollY
      } else {
        this.isScrollDown = false
        this.isScrollUp = false
      }

      this.scrollY = window.scrollY
    },

    /**
     * Show/Hide side menu
     */
    toggleMenu () {
      this.isActiveMenu = !this.isActiveMenu
    },

    /**
     * Hide the menu on mobile when link selected
     */
    hideMenu () {
      console.log('hideMenu')
      this.isActiveMenu = false
    }

  }
}
