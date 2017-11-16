import ModalContact from '@/components/modal-contact/modal-contact.vue'

export default {

  components: {
    ModalContact
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
      isContactModalActive: false

    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-pricing-title')

    this.scrollReveal.reveal('.sr-pricing-subtitle', {
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
    toggleContactModal () {
      this.isContactModalActive = !this.isContactModalActive
    }

  }

}
