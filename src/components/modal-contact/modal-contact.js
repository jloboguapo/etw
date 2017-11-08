/*
|--------------------------------------------------------------------------
| Hubspot Contact Form Modal.
|--------------------------------------------------------------------------
|
| Had to do some jquery and css overwrites to get this to work.
| If you create a new form just make sure the javascript is correct.
| Refer to the hubspot-contact-form.html file for an example
|
*/

export default {

  props: {
    isActive: {
      default: false,
      type: Boolean
    }
  },

  methods: {

    /**
     * Toggle the modal view
     * @return {none}
     */
    toggleModal () {
      this.$emit('toggleContactModal')
    }

  }

}
