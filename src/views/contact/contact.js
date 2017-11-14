/*
|--------------------------------------------------------------------------
| Support Page.
|--------------------------------------------------------------------------
|
|
*/

import ModalContact from '@/components/modal-contact/modal-contact.vue'

export default {

  components: {
    ModalContact
  },

  data () {
    return {

      /**
       * For showing the contact modal
       * @type {Boolean}
       */
      isContactModalActive: false

    }
  },

  methods: {

    /**
     * Toggle the contact Modal
     * @return {none}
     */
    toggleContactModal () {
      this.isContactModalActive = !this.isContactModalActive
    }
  }

}
