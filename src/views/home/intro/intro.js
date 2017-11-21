/*
|--------------------------------------------------------------------------
| Hero Introduction.
|--------------------------------------------------------------------------
|
|
*/

import ModalContact from '@/components/modal-contact/modal-contact.vue'

export default {

  name: 'Intro',

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

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
      duration: 1000,
      opacity: 1,
      scale: 1,
      origin: 'top'
    })

    this.scrollReveal.reveal('.sr-bullets', {
      duration: 400,
      delay: 100,
      scale: 1,
      origin: 'top'
    }, 400)
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
