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
    toggleContactModal () {
      this.isContactModalActive = !this.isContactModalActive
    }
  }

}
