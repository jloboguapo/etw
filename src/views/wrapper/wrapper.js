/*
|--------------------------------------------------------------------------
| wrapper.
|--------------------------------------------------------------------------
|
| This wraps the entire site and brings in the components for all
| sub pages.
|
*/

import FooterWeb from '@/components/footer/footer.vue'
import HeaderWeb from '@/components/header/header.vue'
import ModalContact from '@/components/modal-contact/modal-contact.vue'

export default {

  name: 'wrapper',

  components: {
    HeaderWeb,
    FooterWeb,
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
