<template>
  <div>

      <!--

  HUBSPOT MODAL

  -->
  <modal-hubspot
      v-bind:is-active="isShowHubspotModal"
      modal-title="Talk to me about the MIN workshop!"
      @toggleModal="toggleHubspotModal()">
  </modal-hubspot>


    <!-- INTRO -->
    <div>

      <!-- HERO SECTION -->
      <section class="hero most-important-number-intro">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline">
              <div class="column sr-intro-title">
                <h1 class="subtitle is-size-4 is-size-5-mobile title-text has-text-weight-semibold is-uppercase">An intentional workshop</h1>
                <h1 class="title is-size-2 is-size-3-mobile title-text">Discover Your Most Important Number (MIN)</h1>
                <br/>
                <div class="column has-text-centered">
                    <iframe src="https://player.vimeo.com/video/333140666" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <br/>
                <h1 class="is-size-4 title-text" style="text-align: center;">Every team has a number that’s most important to overall success—you just may not know what your number is yet. Execute to Win can help.</h1>
                <div class="m-t-2 has-text-centered">
                  <!--<button class="button is-uppercase has-text-weight-semibold is-large alt-button is-primary" v-on:click="scrollMeTo('contact')">
                    Learn More
                  </button>-->
                   <button class="button is-uppercase has-text-weight-semibold is-medium alt-button is-primary" v-on:click="toggleHubspotModal()">
                    What's my MIN?
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section>
      <div class="hero-body">
          <div class="container">
            <br/>
            <h1 class="title is-size-4 has-text-green-darker has-text-centered">ETW’s coaches help intentional leaders—like you—create exceptional value by uncovering,
communicating, and impacting your Most Important Number. To accomplish this,
we begin with an exclusive half-day workshop where you:</h1>
            <br/>
            <br/>
            <div class="columns is-multiline has-text-centered is-centered">
                <div class="column sr-bullets-alt">
                    <div class="icon-text-container">
                        <figure class="image is-96x96 is-inline-block has-margin-right"><img src="@/assets/images/icons/noun-discover.png"/></figure>
                        <br/>
                        <br/>
                        <p class="has-text-green-darker has-text-weight-semibold">Discover your<br/>Most Important<br/>Number</p>
                    </div>
                </div>
                <div class="column sr-bullets-alt">
                    <div class="icon-text-container">
                        <figure class="image is-96x96 is-inline-block has-margin-right"><img src="@/assets/images/icons/noun-leadership.png"/></figure>
                        <br/>
                        <br/>
                        <p class="has-text-green-darker has-text-weight-semibold">Identify leadership<br/>competencies that<br/>grow your MIN</p>
                    </div>
                </div>
                <div class="column sr-bullets-alt">
                    <div class="icon-text-container">
                        <figure class="image is-96x96 is-inline-block has-margin-right"><img src="@/assets/images/icons/noun-pin.png"/></figure>
                        <br/>
                        <br/>
                        <p class="has-text-green-darker has-text-weight-semibold">Pinpoint gaps in your<br/>leadership development<br/>strategy</p>
                    </div>
                </div>
            </div>
            <br/>
            <h1 class="subtitle title is-size-5 has-text-centered has-text-green-darker">In this single session, you and your team will walk away with laser focus, levers to affect what matters most, and a path to cultivating an intentional culture of results-oriented leaders.</h1>
            <br/>
            <br/>
            <div class="is-divider"></div>
          </div>
      </div>
    </section>


    <section>
      <div class="hero-body">
          <div class="container">
              <div class="columns is-desktop">
                <div class="column">
                    <div class="column has-text-centered">
                        <h1 class="is-size-2 is-size-4-mobile is-italic quote-text has-text-weight-semibold">“ETW helped drive turnaround results in just 3 months. EBITDA improved by over 20% and NPS scores for both customers and employees improved from the worst-performing to the best-performing in the organization!”</h1>
                    </div>
                    <div class="columns is-centered">
                        <div class="column has-text-centered">
                           <h2 class="is-size-3 has-text-weight-light has-text-grey-light">- CHMM OPERATIONS MANAGER</h2>
                           <figure class="image is-inline-block is-32x32 is-inline-block has-margin-right has-vertical-align-middle"><img src="@/assets/images/icons/chemcare.png"/></figure>
                           <h2 class="is-size-3 is-inline-block has-text-weight-semibold has-vertical-align-middle">US CHEMCARE</h2>
                        </div>
                    </div>
                </div>
              </div>
              <br/>
              <br/>
             <div class="is-divider"></div>
          </div>
      </div>
    </section>

    <section>
      <div class="hero-body" style="padding:0rem 1.5rem!important;">
          <div class="container">
            <!--<h1 class="title is-size-3 has-text-centered has-text-green-darker">In this single session, you and your team will walk away with laser focus, levers to affect what matters most, and a path to cultivating an intentional culture of results-oriented leaders.</h1>-->
            <div class="columns is-multiline has-text-centered is-centered">
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1 has-margin-right has-vertical-align-middle has-text-green-darker">10</strong><span class="is-size-3 has-text-grey-light is-uppercase has-vertical-align-middle">people</span>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1 has-margin-right has-vertical-align-middle has-text-green-darker">4</strong><span class="is-size-3 has-text-grey-light is-uppercase has-vertical-align-middle">hours</span>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1 has-margin-right has-vertical-align-middle has-text-green-darker">1</strong><span class="is-size-3 has-text-grey-light is-uppercase has-vertical-align-middle">number</span>
                    </div>
                </div>
            </div>
            <br/>
            <h1 class="subtitle is-size-5 has-text-centered has-text-green-darker">* ETW is extending a 50% discount through the end of May off a Most Important Number workshop at a total cost of $7,500. Contact us today to schedule your workshop.</h1>
            <br/>
            <div class="is-divider"></div>
          </div>
      </div>
    </section>

   
    <section>
        <div class="columns is-multiline is-vcentered crush-your-goals is-marginless" ref="contact">
            <div class="column has-text-centered sr-intro-title">
                <h1 class="title">Only the intentional become exceptional</h1>
                <p class="">It’s time to find your focus and accelerate your growth. To schedule your Most Important Number workshop, contact stacie.mallen@etw.com or click below.</p>
                <br/>
                <button class="button is-uppercase has-text-weight-semibold is-medium alt-button is-primary" v-on:click="toggleHubspotModal()">
                    What's my MIN?
                </button>
            </div>
        </div>
    </section>
    </div>

  </div>
</template>

<script>
import ModalHubspot from '@/components/ModalHubspot.vue'

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
      isShowHubspotModal: false

    }
  },

  metaInfo () { return this.$store.getters['meta/showByPage']('mostImportantNumber') },

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
      duration: 1000,
      viewFactor: 0.1
    })

    this.scrollReveal.reveal('.sr-bullets', {
      duration: 800,
      interval: 800,
      scale: 1,
      origin: 'bottom',
      distance: '40px',
      viewFactor: 0.5
    })

    this.scrollReveal.reveal('.sr-bullets-alt', {
      duration: 800,
      interval: 800,
      scale: 1,
      origin: 'top',
      distance: '40px',
      viewFactor: 0.5
    })

    this.scrollReveal.reveal('.sr-left', {
      duration: 2000,
      interval: 400,
      scale: 1,
      origin: 'left',
      viewFactor: 0.5
    })

    this.scrollReveal.reveal('.sr-right', {
      duration: 2000,
      interval: 400,
      scale: 1,
      origin: 'right',
      viewFactor: 0.5
    })

    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })
  },

  methods: {

    toggleHubspotModal () {
      this.isShowHubspotModal = !this.isShowHubspotModal
    },

    scrollMeTo (refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop

      window.scrollTo({ top, behavior: 'smooth' })
    }

  }

}
</script>
