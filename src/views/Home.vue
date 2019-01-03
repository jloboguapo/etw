<template>
  <div>

    <!-- INTRO -->
    <div>

      <!-- HERO SECTION -->
      <section class="hero is-dark is-medium home-intro">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-multiline">
              <div class="column is-7-desktop is-12-tablet">
                <h1 class="title is-1 sr-intro-title has-text-white">
                  What if your employees were 100% aligned to leadership, strategy and culture?
                </h1>
                <!-- VIDEO MODAL -->
                <button class="button is-large is-success is-rounded m-t-1" v-on:click="toggleVideoModal()">
                  <span>Learn more</span>
                  <span class="icon">
                    <i class="icon-play is-32 m-t-_5"></i>
                  </span>
                </button>
              </div>
              <div class="column">
                <div class="columns is-centered">
                  <div class="column is-narrow has-text-right">
                    <h2 class="subtitle is-3 has-text-right has-text-white">
                      <span class="bullets sr-bullets"><span class="has-text-grey-light">Better</span> <strong class="has-text-light">Alignment</strong></span><br>
                      <span class="bullets sr-bullets"><span class="has-text-grey-light">Drives better</span> <strong class="has-text-light">Conversations</strong></span><br>
                      <span class="bullets sr-bullets"><span class="has-text-grey-light">Leading to better</span> <strong class="has-text-light">Actions</strong></span><br>
                      <span class="bullets sr-bullets"><span class="has-text-grey-light">Producing extraordinary</span> <strong class="has-text-light">Results</strong></span>
                    </h2>
                    <div class="m-t-2">
                      <button class="button is-large is-rounded is-primary" v-on:click="toggleHubspotModal()">
                        Contact us to get started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="has-text-centered">
            </div>
          </div>
        </div>
        <div class="scroll-down">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span>Scroll down</span>
        </div>
      </section>

      <!--

      CONTACT MODAL

      -->
      <modal-hubspot
          modal-id="contact"
          modal-title="Contact ETW Sales"
          v-bind:is-active="isShowHubspotModal"
          @toggleModal="toggleHubspotModal()">
      </modal-hubspot>

      <!--

        INTRO VIDEO MODAL

      -->
      <div class="modal modal-video is-wide animated fadeIn" v-bind:class="{ 'is-active': isShowVideoModal }">
        <div class="modal-background" v-on:click="toggleVideoModal()"></div>
        <div class="modal-content">
          <div class="content">
            <youtube
                :video-id="videoPlayerOptions.videoId"
                :player-vars="videoPlayerOptions"
                ref="youtube" />
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" v-on:click="toggleVideoModal()"></button>
      </div>

    </div>

    <!-- MAIN PAGE CONTENT -->
  <div class="container">

    <!--

    IMPROVING ALIGNMENT

    -->
    <section class="hero is-medium is-light home-improving-alignment m-y-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-6 p-l-3">
            <div class="m-b-2 m-t-3 sr-up">
              <h5 class="has-text-grey">EXECUTE TO WIN</h5>
              <h1 class="title is-1">Improving Alignment to Get Better Results</h1>
            </div>
            <p class="m-b-2 is-size-5 sr-up-delay">Execute to Win (ETW) is a consulting company that helps organizations improve alignment to get better results; alignment to intentional leadership, strategy, execution and culture. Only when organizations are aligned can they have the better conversations
              leading to better actions to yield better results. Most organizations find alignment to be both their biggest challenge and opportunity. What would be different if your organization was 20, 30, 40, 50% more aligned? Our customers find that small
              improvements in alignment yield large improvements in employee morale, engagement and bottom-line results.</p>
            <router-link :to="{ name: 'about' }" tag="button" class="button is-medium is-rounded is-outlined is-primary">Learn more about ETW</router-link>
          </div>
          <div class="column is-background">
            <!-- placeholder -->
          </div>
        </div>
      </div>
    </section>

    <!--

    PROFESSIONAL SERVICES

    -->
    <section class="hero is-medium home-professional-services m-y-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-5 is-offset-6">
            <div class="m-b-2 m-t-3 sr-up">
              <h5>PROFESSIONAL SERVICES</h5>
              <h1 class="title is-1">Align your organization for better results</h1>
            </div>
            <p class="m-b-2 is-size-5 sr-up-delay">Delivering workshops and facilitations to align leadership, strategy, execution and culture.</p>
            <router-link :to="{ name: 'services' }" tag="button" class="button is-medium is-primary is-outlined is-rounded sr-up-delay">
              Learn more about our services
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!--

    SOFTWARE

    -->
    <section class="hero is-medium home-software">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-6-desktop is-10-tablet has-text-centered">
            <h1 class="title is-1 m-b-3 sr-up">
              Turn conversations into actions with ETW’s Software.
            </h1>
            <p class="is-size-5 m-b-2 sr-up-delay">
              Web based application together with <br>
              iOS and Android mobile solutions
            </p>
            <div>
              <router-link :to="{ name: 'software' }" tag="button" class="button is-medium is-rounded is-outlined is-primary">Learn more about our software</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <!-- end of container -->

  </div>
</template>

<script>
import ModalHubspot from '@/components/ModalHubspot.vue'

export default {

  components: {
    ModalHubspot
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
      isShowVideoModal: false,

      /**
       * For Alignment video playback
       * @type {Object}
       */
      videoPlayerOptions: {
        videoId: 'EakfI3qrPOA',
        autoplay: 0
      }

    }
  },

  metaInfo () { return this.$store.getters['meta/showByPage']('home') },

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
      duration: 1000
    })

    this.scrollReveal.reveal('.sr-bullets', {
      duration: 400,
      interval: 400,
      scale: 1,
      origin: 'top'
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
      this.isShowVideoModal = !this.isShowVideoModal

      if (!this.isShowVideoModal) {
        this.player.pauseVideo()
      } else {
        this.player.playVideo()
      }
    }

  }

}
</script>

<style>
  iframe {
    width: 80vw;
    height: 80vh;
  }
</style>
