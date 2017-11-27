import ModalHubspot from '@/components/modal-hubspot/modal-hubspot.vue'

export default {

  components: {
    ModalHubspot
  },

  data () {
    return {

      /**
       * Service and Workshop cards
       * @type {Array}
       */
      services: [
        {
          title: 'Strategic Planning',
          description: 'How much of your strategy did you accomplish last year?  How effective is your strategic planning process?  Is your planning process too focused on “the process” and not enough on the results it is supposed to produce?  This facilitation and all of its pre-work takes a practical and actionable approach to assessing your industry, addressable markets, competition and your ability to execute.  ETW will provide a framework to keep all leaders on the leading edge of where they need to create more value next in order to achieve or beat your strategic objectives.',
          tags: [
            'facilitation'
          ],
          color: '#276681'
        }, {
          title: 'Intentional Leadership',
          description: 'What would be different for your organization if you could objectively define what capable leadership looks like and then develop and hold all of your leaders accountable to this standard? This facilitation will help you define practical and objective actions leaders take to achieve extraordinary results in the categories of leadership, management and foundation building capability. We will then provide a framework to develop leaders significantly faster. This facilitation will weave in the challenges and opportunities your organization is facing today to make it real and to have a lasting positive effect on your organization’s results.',
          tags: [
            'facilitation'
          ],
          color: '#00afef'
        }, {
          title: 'Intentional Culture',
          description: 'What would be different if you had an intentional high-performance culture that caused team members at all levels in your organization to behave, lead and perform as good or better than the top 10% at your strongest, most admired competitors?  Alignment tools like mission, vision, behaviors and leadership traits should be designed to intentionally and continually improve both your work environment and bottom-line results.  This facilitation will distill out alignment tools that are right for your organization and continually improve employee buy-in, engagement and the results in every corner of your organization.  ETW will provide a framework that makes it easier for all employees to fully live your culture in significantly less time than your competitors.',
          tags: [
            'facilitation'
          ],
          color: '#004438'
        }, {
          title: 'Goal Creation and Assessment',
          description: 'Is everyone in the organization crystal clear about what is expected of them and what winning looks like in their role? Does everyone know how they are performing to plan at any given time? Setting clear goals that align expectations, outcomes and accountability is the first step in effective communication, management and execution of goals.',
          tags: [
            'workshop'
          ],
          color: '#00a85d'
        }, {
          title: 'Executing On Your Strategy',
          description: 'How effective is your organization at executing on strategy?  Do you spend at least as much time thinking about how you will execute on strategy as you do coming up with your strategy?  Most leaders say they aren’t fully implementing 20 percent of what they know they should be implementing.  This facilitation provides a framework to more fully sustain and scale executing on your strategic objectives.  ETW’s execution and  alignment process allows your organization to iterate faster and smarter than your competitors.',
          tags: [
            'facilitation'
          ],
          color: '#30383a'
        }, {
          title: 'Strategic Planning Tune-Up',
          description: 'Does everyone on the leadership team know what is expected of them, how their goals drive the strategy, what they are accountable to, what the most important outcomes are for their area of responsibility, what it means to be on-track at any given time throughout the year? This facilitation will help you do all of this while providing a process and software to keep your leadership team engaged, aligned to the strategy and focusing on outcomes and solutions throughout the year.',
          tags: [
            'facilitation'
          ],
          color: '#00b7c6'
        }
      ],

      /**
       * For showing the contact modal
       * @type {Boolean}
       */
      isContactModalActive: false,

      /**
       * For showing the custom services contact modal
       * @type {Boolean}
       */
      isCustomServicesModalActive: false

    }
  },

  mounted () {
    // animations
    this.scrollReveal.reveal('.sr-up')
  },

  methods: {
    /**
     * Toggle the contact Modal
     * @return {none}
     */
    toggleContactModal () {
      this.isContactModalActive = !this.isContactModalActive
    },

    /**
     * Toggle the custom services contact Modal
     * @return {none}
     */
    toggleCustomServicesModal () {
      this.isCustomServicesModalActive = !this.isCustomServicesModalActive
    }
  }

}
