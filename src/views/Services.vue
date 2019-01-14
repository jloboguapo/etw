<template>
<div>

  <!--

  INTRO

  -->
  <section class="hero is-medium is-dark services-intro">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half-desktop is-10-tablet">
            <h1 class="title is-1 has-text-centered sr-up">
              ETW offers a wide range of professional services to better align your organization
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN PAGE CONTENT -->
  <div class="container">

    <!--

    PROFESSIONAL SERVICES

    -->
    <section class="hero is-medium services-professional-services is-light m-y-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <div class="m-b-2">
              <h5 class="has-text-grey sr-up">PROFESSIONAL SERVICES</h5>
              <h1 class="title is-1 sr-up">Workshops and Facilitations</h1>
            </div>
            <p class="m-b-2 is-size-5 sr-up">The ETW Professional Services team ​brings a practical approach to executive workshops that engages your team to produce actionable results you can apply the very next day.  We specialize in facilitating strategic planning sessions, executive retreats and leadership development workshops.  Have a unique need? Allow us to pull from decades of experience to create ​a custom solution to align your team and produce exceptional results.</p>
            <button class="button is-medium is-rounded is-outlined is-primary sr-up" v-on:click="toggleContactModal()">
              <span>Request proposal</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--

    RESOURCES

    -->
    <section>
      <div class="columns is-multiline">
        <div class="column is-one-third sr-up" v-for="service in services" v-bind:key="service.title">
          <div class="card is-fullheight">
            <div class="card-header p-y-1 p-x-1" v-bind:style="`background: ${service.color};`">
              <p class="card-header-title title is-4 has-text-white">
                {{ service.title }}
              </p>
            </div>
            <div class="card-content">
              <div class="content">
                <p>{{ service.description }}</p>
                <div class="tags">
                  <span class="tag" v-for="tag in service.tags"  v-bind:key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--

    CUSTOM PROPOSAL

    -->
    <section class="hero is-medium is-dark is-bold services-retreats m-y-2">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-6-desktop is-10-tablet">
            <div class="m-b-2">
              <h5 class="has-text-grey sr-up">CUSTOM PROPOSAL</h5>
              <h1 class="title is-1 sr-up">Customized Corporate and Leadership Retreats</h1>
            </div>
            <p class="m-b-2 is-size-5 sr-up">What are you trying to accomplish with your next corporate retreat? We can work with you to put together a custom program that helps you accomplish your goals and address your biggest challenges. Services are customizable and can range from
              two hour workshops to multi-day strategy, leadership or culture themed programs.</p>
            <button class="button is-medium is-rounded is-primary sr-up" v-on:click="toggleCustomServicesModal()">
              <span class="is-hidden-mobile">Contact us to request a proposal</span>
              <span class="is-hidden-tablet">Request proposal</span>
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
  <!-- end of container -->

  <!--

  PROFESSIONAL SERVICES CONTACT MODAL

  -->
  <modal-hubspot
      v-bind:is-active="isContactModalActive"
      modal-id="contact"
      modal-title="Contact Professional Services"
      form-id="cd84c977-d3a4-46d1-915e-59c7a9cc6deb"
      @toggleModal="toggleContactModal()">
  </modal-hubspot>

  <!--

  CUSTOM PROFESSIONAL SERVICES CONTACT MODAL

  -->
  <modal-hubspot
      v-bind:is-active="isCustomServicesModalActive"
      modal-id="services"
      modal-title="Custom Professional Services"
      form-id="fe155ab5-8a6a-49a3-8a5f-71a34ba6dfdc"
      @toggleModal="toggleCustomServicesModal()">
  </modal-hubspot>

</div>

</template>

<script>
import ModalHubspot from '@/components/ModalHubspot.vue'

export default {

  components: {
    ModalHubspot
  },

  metaInfo () { return this.$store.getters['meta/showByPage']('services') },

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
          title: 'Developmental Conversations',
          description: 'Does your organization conduct performance evaluations or one-to-one meetings that employees love? Are employees and managers having supportive and developmental conversations? This workshop provides a framework that will enhance your evaluations, one-to-ones and other communications that are intended to develop employees and drive accountability.',
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
</script>
