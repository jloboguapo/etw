<template>
  <div>

    <!-- INTRO -->
    <div>

      <!-- HERO SECTION -->
      <section class="hero discover-intro">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline">
              <div class="column sr-intro-title">
                <h1 class="subtitle is-size-4 is-size-5-mobile title-text is-uppercase">An intentional workshop</h1>
                <h1 class="title is-size-1 is-size-2-mobile title-text">Discover Your Most Important Number</h1>
                <br/>
                <div class="column has-text-centered">
                    <iframe class="embedded-video" src="https://www.youtube.com/embed/EakfI3qrPOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br/>
                <h1 class="is-size-4 title-text">Every team has a number that’s most important to their overall success—you just may not know what your number is yet. ETW can help.</h1>
                <div class="m-t-2 has-text-centered">
                  <button class="button is-uppercase has-text-weight-semibold is-large alt-button is-primary" v-on:click="buildEmail()">
                    Get 50% off
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
              <div class="columns is-desktop">
                <div class="column">
                    <div class="column has-text-centered">
                        <h1 class="is-size-2 is-size-3-mobile is-italic quote-text has-text-weight-semibold">“ETW has the best process that I have seen when it comes to goal-setting, planning what to execute, and then measuring your success for future achievement and improvement.”</h1>
                    </div>
                    <div class="columns is-centered">
                        <div class="column has-text-centered">
                           <h2 class="is-size-3 has-text-weight-light has-text-grey-light">- Robert Schiller, CEO</h2>
                           <figure class="image is-inline-block is-32x32 is-inline-block has-margin-right has-vertical-align-middle"><img src="@/assets/images/icons/zoyo.png"/></figure>
                           <h2 class="is-size-3 is-inline-block has-text-weight-semibold has-vertical-align-middle">Zoyo Neighborhood Yogurt</h2>
                        </div>
                    </div>
                </div>
              </div>
              <br/>
              <br/>
             <div class="is-divider"></div>
          </div>
      </div>
      <br/>
    </section>

    <section>
      <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-3 has-text-centered has-text-green-darker">In this single session, you and your team will walk away with laser focus, levers to affect what matters most, and a path to cultivating an intentional culture of results-oriented leaders.</h1>
            <br/>
            <div class="columns is-multiline has-text-centered is-centered">
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1">$15,000</strong>
                        <br/>
                        <strong class="has-text-grey-light is-uppercase">cost</strong>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1">10</strong>
                        <br/>
                        <strong class="has-text-grey-light is-uppercase">people</strong>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1">4</strong>
                        <br/>
                        <strong class="has-text-grey-light is-uppercase">hours</strong>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="statistic">
                        <strong class="is-size-1">1</strong>
                        <br/>
                        <strong class="has-text-grey-light is-uppercase">number</strong>
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
      <div class="hero-body has-background-white-ter workshop-goals">
          <div class="container">
              <h1 class="title is-size-4 has-text-green-darker">For decades, ETW’s team of coaches has been helping intentional leaders create exceptional value by uncovering, communicating, and impacting their most important number. To accomplish this, we begin with an exclusive half-day workshop where you will: </h1>
              <div class="has-margin-left">
                  <span class="subtitle is-size-5"><span class="has-margin-right">•</span>Discover the most important number for teams within your organization</span>
                  <br/>
                  <span class="subtitle is-size-5"><span class="has-margin-right">•</span>Identify the leadership competencies that grow your most important number</span>
                  <br/>
                  <span class="subtitle is-size-5"><span class="has-margin-right">•</span>Pinpoint gaps in your leadership development strategy</span>
              </div>
          </div>
      </div>
    </section>

    <section>
        <div class="columns is-multiline is-vcentered crush-your-goals is-marginless">
            <div class="column has-text-centered sr-intro-title">
                <h1 class="title">Crush your goals</h1>
                <p class="">ETW is extending all Networking Leader event participants 50% off their most important number workshop at a total cost of $7,500. To take advantage of this offer click the button below!</p>
                <br/>
                <button class="button is-uppercase has-text-weight-semibold is-medium alt-button is-primary" v-on:click="buildEmail()">
                    Get 50% off
                </button>
            </div>
        </div>
    </section>

      <!--

      CONTACT MODAL

      -->
      <modal-hubspot
          modal-id="contact"
          modal-title="Contact ETW Sales"
          v-bind:is-active="isShowHubspotModal"
          @toggleModal="buildEmail()">
      </modal-hubspot>
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

  metaInfo () { return this.$store.getters['meta/showByPage']('discover') },

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
      duration: 1000,
      viewFactor: 0.1
    })

    this.scrollReveal.reveal('.sr-bullets', {
      duration: 400,
      interval: 400,
      scale: 1,
      origin: 'top',
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

    buildEmail () {
      window.location.href = 'mailto:win@etw.com'
    }

  }

}
</script>
