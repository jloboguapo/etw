<template>
  <div>

    <!-- INTRO -->
    <div>

      <!-- HERO SECTION -->
      <section class="hero is-dark home-intro">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline">
              <div class="column has-text-centered sr-intro-title">
                <h1 class="title is-size-1 is-size-2-mobile title-text">Only the intentional become exceptional</h1>
                <h1 class="is-size-5 subtitle-text">ETW is an intentional leadership platform that helps high performing organizations deliver results faster. It’s your time to win. </h1>
                <br/>
                <br/>
                <br/>
                <div class="m-t-2">
                  <button class="button is-uppercase has-text-weight-semibold is-large alt-button is-primary" v-on:click="toggleHubspotModal()">
                    Request a demo
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
            <h1 class="title is-1-desktop is-3-mobile has-text-centered has-text-green-darker">Purpose + People + Process &rArr; Winning</h1>
            <br/>
            <br/>
            <div class="columns is-multiline has-text-centered is-centered">
                <div class="column sr-bullets">
                    <div class="icon-text-container">
                        <figure class="image is-96x96 is-inline-block has-margin-right"><img src="@/assets/images/icons/focus.png"/></figure>
                        <br/>
                        <br/>
                        <p>
                            <strong class="has-text-grey-light">Create relentless focus</strong>
                            <br/>
                            <span class="has-text-grey-light">By focusing on your top priorities within the ETW platform, everyone becomes aligned and contributes toward what matters most.</span>
                        </p>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="icon-text-container">
                        <figure class="image is-96x96 is-inline-block has-margin-right"><img src="@/assets/images/icons/leaders.png"/></figure>
                        <br/>
                        <br/>
                        <p>
                            <strong class="has-text-grey-light">Develop extraordinary leaders</strong>
                            <br/>
                            <span class="has-text-grey-light">Gain a pulse on the development of your teams and individuals in one platform, empowering them to learn, apply, and succeed.</span>
                        </p>
                    </div>
                </div>
                <div class="column sr-bullets">
                    <div class="icon-text-container">
                        <figure class="image is-96x96 is-inline-block has-margin-right"><img src="@/assets/images/icons/culture.png"/></figure>
                        <br/>
                        <br/>
                        <p>
                            <strong class="has-text-grey-light">Cultivate healthy culture</strong>
                            <br/>
                            <span class="has-text-grey-light">When the right people are aligned to the right goals and habits, everybody wins. Pack a punch in your performance through proven, repeatable team processes.</span>
                        </p>
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
      <div class="hero-body">
          <div class="container">
              <div class="columns is-desktop">
                <div class="column">
                   <div class="quote-text-container">
                    <div class="column has-text-centered">
                        <h1 class="is-size-2 is-size-3-mobile is-italic quote-text has-text-weight-semibold">“ETW helped drive turnaround results in just 3 months.”</h1>
                    </div>
                    <div class="columns is-centered is-mobile">
                        <div class="column is-hidden-tablet is-hidden-desktop has-text-centered">
                           <h2 class="is-size-4 has-text-weight-light has-text-grey-light">- CHMM, Operations Manager</h2>
                           <figure class="image is-inline-block is-32x32 is-inline-block has-margin-right has-vertical-align-middle"><img src="@/assets/images/icons/chemcare.png"/></figure>
                           <h2 class="is-size-4 is-inline-block has-text-weight-semibold has-vertical-align-middle">US ChemCare</h2>
                        </div>
                        <div class="column is-hidden-touch">
                           <h2 class="is-size-3 has-text-weight-light has-text-grey-light">- CHMM, Operations Manager</h2>
                           <figure class="image is-inline-block is-32x32 is-inline-block has-margin-right has-vertical-align-middle"><img src="@/assets/images/icons/chemcare.png"/></figure>
                           <h2 class="is-size-3 is-inline-block has-text-weight-semibold has-vertical-align-middle">US ChemCare</h2>
                        </div>
                        <div class="column is-hidden-desktop is-hidden-mobile has-text-right">
                            <h2 class="is-size-3 has-text-weight-light has-text-grey-light">- CHMM, Operations Manager</h2>
                        </div>
                        <div class="column is-hidden-desktop is-hidden-mobile">
                            <figure class="image is-inline-block is-32x32 is-inline-block has-margin-right has-vertical-align-middle"><img src="@/assets/images/icons/chemcare.png"/></figure>
                            <h2 class="is-size-3 is-inline-block has-text-weight-semibold has-vertical-align-middle">US ChemCare</h2>
                        </div>
                    </div>
                    <div class="columns is-multiline is-vcentered">
                        <div class="column has-text-centered">
                            <router-link :to="{name: 'customerSuccess'}">
                                <span class="has-text-green is-italic has-text-weight-semibold">See More </span><span class="has-text-green">▶</span>
                            </router-link>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="column has-text-centered">
                    <iframe class="embedded-video" src="https://www.youtube.com/embed/EakfI3qrPOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
          </div>
      </div>
      <br/>
    </section>

    <section>
        <div class="columns is-multiline is-vcentered is-mobile is-marginless">
            <div class="column has-text-centered is-centered tile-1">
                <div class="columns home-tile is-multiline is-vcentered">
                    <div class="column has-text-centered is-centered tile-text sr-left">
                        <h1 class="title has-text-white">People-driven solutions</h1>
                        <br/>
                        <h1 class="subtitle has-text-white">After decades of growing global, market-leading brands, our solution architects have the hands-on experience needed to help you deliver results faster. Traction requires action.</h1>
                        <br/>
                        <router-link :to="{name: 'services'}">
                            <button class="button is-primary is-inverted is-outlined has-text-weight-semibold is-uppercase is-large">
                                Explore Our Solutions
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="column has-text-centered is-centered tile-2 is-marginless">
                <div class="columns home-tile is-multiline is-vcentered">
                    <div class="column has-text-centered is-centered tile-text sr-right">
                        <h1 class="title has-text-white">Platform-enabled execution</h1>
                        <br/>
                        <h1 class="subtitle has-text-white">Built on ETW’s intentional leadership platform, our software products, Align and Drive, enable you to stay focused on your most important number while developing your leaders at scale.</h1>
                        <br/>
                        <router-link :to="{name: 'software'}">
                            <button class="button is-primary is-inverted is-outlined has-text-weight-semibold is-uppercase is-large">
                                Explore Our Software
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="columns is-multiline is-vcentered our-story is-mobile is-marginless">
            <div class="column">
                <div class="columns is-multiline is-vcentered">
                    <div class="column is-centered is-padded">
                        <h1 class="title has-text-green-darker">This isn’t our first rodeo</h1>
                        <p>Most teams spend too much time on strategy and not enough time on figuring out how they and their team will execute and sustain momentum. We know how that feels because we’ve been there. We’ve started businesses. We’ve grown them. We’ve sold them. And now, we’re here to help you with the lessons we’ve learned and the platform we’ve built from the ground up to deliver results faster.</p>
                        <br/>
                        <router-link :to="{name: 'about'}">
                            <button class="button is-uppercase has-text-weight-semibold is-medium alt-button is-primary">
                                read our story
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="column has-text-centered is-centered is-hidden-mobile">
                <figure class="image is-inline-block has-margin-right is-padded"><img src="@/assets/images/backgrounds/computer-screen.png"/></figure>
            </div>
        </div>
    </section>

    <section>
        <div class="columns is-multiline is-vcentered crush-your-goals is-marginless">
            <div class="column has-text-centered sr-intro-title">
                <h1 class="title">Crush your goals</h1>
                <p class="">If you want to win, that’s what we’re all about. Unintentional leaders need not apply. Do you have what it takes?</p>
                <br/>
                <button class="button is-uppercase has-text-weight-semibold is-medium alt-button is-primary" v-on:click="toggleHubspotModal()">
                    Contact us
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
          @toggleModal="toggleHubspotModal()"
          form-id="6131a846-42ec-448b-8da8-278458485672">
      </modal-hubspot>

      <!--

        INTRO VIDEO MODAL

      -->
      <modal-youtube
          ref="introVideo"
          video-id="EakfI3qrPOA"
          :is-active="isShowYoutubeModal"
          v-on:close="isShowYoutubeModal = false">
      </modal-youtube>

    </div>

  </div>
</template>

<script>
import ModalHubspot from '@/components/ModalHubspot.vue'
import ModalYoutube from '@/components/ModalYoutube.vue'

export default {

  components: {
    ModalHubspot,
    ModalYoutube
  },

  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },

  data () {
    return {

      /**
       * For showing the contact modal
       * @type {Boolean}
       */
      isShowHubspotModal: false,

      /**
       * Show/hide video modal
       * @type {Boolean}
       */
      isShowYoutubeModal: false

    }
  },

  metaInfo () { return this.$store.getters['meta/showByPage']('home') },

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
      duration: 1000,
      viewFactor: 0.5
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

    toggleHubspotModal () {
      this.isShowHubspotModal = !this.isShowHubspotModal
    },

    toggleVideoModal () {
      this.isShowYoutubeModal = true
    }

  }

}
</script>
