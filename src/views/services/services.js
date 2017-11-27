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
          description: 'How much of your strategy did you accomplish last year? Was the process overly complex and academic? Was your strategy executable? This facilitation is customized to address your organization’s unique challenges, engage your leadership team and deliver an executable strategy.',
          tags: [
            'facilitation'
          ],
          color: '#276681'
        }, {
          title: 'Intentional Leadership',
          description: 'What would be different for your organization if you could clearly and objectively define the kind of leadership you need to accomplish the results you want and hold every leader in the organization accountable to them? This facilitation will help you define the ideal leadership, management and foundational capabilities for your organization and provides a framework to continually align your leadership team.',
          tags: [
            'workshop'
          ],
          color: '#00afef'
        }, {
          title: 'Intentional Culture',
          description: 'What would happen if more than 50% of your employees were living your culture and behaving like the top 10% of your most admired competitors? This facilitation provides a proven process to objectively define cultural elements such as Mission, Vision and Behaviors so that everyone in the organization knows exactly how they are expected to behave.',
          tags: [
            'workshop'
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
          title: 'Developmental Conversations',
          description: 'Does your organization conduct performance evaluations or one-to-one meetings that employees love? Are employees and managers having supportive and developmental conversations? This workshop provides a framework that will enhance your evaluations, one-to-ones and other communications that are intended to develop employees and drive accountability.',
          tags: [
            'workshop'
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
