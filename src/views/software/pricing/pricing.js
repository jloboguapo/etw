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
      isModalActive: false,

      /**
       * Plan details
       * @type {Array}
       */
      plans: [
        {
          title: 'Basic',
          features: [
            'Goals - Manager Assigned and Personal',
            'Evaluations',
            'Stream Communications',
            'Standard Roles and Permissions'
          ]
        },
        {
          title: 'Premium',
          features: [
            'Everything in Basic, plus',
            'Companion Mobile Application',
            'Plans with KPIs',
            'Goals - Plan, Alignment, and Leadership',
            'Action Items',
            'Meetings',
            'Team Organization',
            'Real-time Communications',
            'Custom Roles',
            'Canned Reports'
          ]
        }, {
          title: 'Ultimate',
          features: [
            'Everything in Premium, plus',
            'API Access',
            'Single Sign On (SSO)',
            'Goal Categorization with Automatic Alignment',
            'Tone Analyzer',
            'Custom Permissions'
          ]
        }
      ]

    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })
  },

  methods: {

    /**
     * Set what tab is showing
     * @param {String} activePricingTab
     */
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
