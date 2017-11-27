import ModalHubspot from '@/components/modal-hubspot/modal-hubspot.vue'

export default {

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
    // animations
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-left', {
      origin: 'left'
    })

    this.scrollReveal.reveal('.sr-right', {
      origin: 'right',
      delay: 100
    })
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
