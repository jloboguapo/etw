/*
|--------------------------------------------------------------------------
| Hero Introduction.
|--------------------------------------------------------------------------
|
|
*/

import ModalHubspot from '@/components/modal-hubspot/modal-hubspot.vue'

export default {

  name: 'Intro',

  components: {
    ModalHubspot
  },

  data () {
    return {

      /**
       * For showing the contact modal
       * @type {Boolean}
       */
      isModalActive: false

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
    toggleModal () {
      this.isModalActive = !this.isModalActive
    }
  }

}
