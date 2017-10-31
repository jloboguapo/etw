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
    handleClick () {
      this.$parent.toggleMenu()
    }
  }

}
