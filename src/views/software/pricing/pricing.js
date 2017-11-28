import ModalHubspot from '@/components/modal-hubspot/modal-hubspot.vue'

export default {

  components: {
    ModalHubspot
  },

  data () {
    return {

      /**
       * Active pricing tab
       * @type {String}
       */
      activePricingTab: 'annual',

      /**
       * For showing the contact modal
       * @type {Boolean}
       */
      isModalActive: false

    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })
  },

  methods: {

    setPricingTab (activePricingTab) {
      this.activePricingTab = activePricingTab
    },

    /**
     * Toggle the contact Modal
     * @return {none}
     */
    toggleModal () {
      this.isModalActive = !this.isModalActive
    }

  }

}
