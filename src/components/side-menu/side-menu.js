/*
|--------------------------------------------------------------------------
| Side menu component.
|--------------------------------------------------------------------------
|
| The slide-out side menu.
|
*/

export default {

  name: 'sideMenu',

  props: ['isActiveMenu'],

  methods: {

    /**
     * Show/Hide the sidebar
     * @return {none}
     */
    handleClick () {
      this.$parent.toggleMenu()
    },

    /**
     * Fire the show contact form
     * @return {none}
     */
    contactUs () {
      this.handleClick()
      this.$parent.$emit('contactUs')
    }
  }

}
