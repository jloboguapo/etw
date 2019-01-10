<template>
    <div>

      <modal-youtube
          :is-active="isShowYoutubeModal"
          :video-id="activeYoutubeId"
          v-on:close="isShowYoutubeModal = false">
      </modal-youtube>

      <section class="hero is-dark hero-privacy-intro p-t-5">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-1 has-text-centered sr-up">
              Events
            </h1>
            <h2 class="subtitle has-text-centered sr-up-delay">
              On-demand webinars, podcast recordings, and upcoming events
            </h2>
          </div>
        </div>
      </section>

      <div class="container">

        <!-- ROB HAMILTON MED TRANS -->
        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  href="https://t.co/3EvYSFM84F"
                  target="_blank">
                <img
                    src="@/assets/images/events/rob_hamilton_med_trans.jpg"
                    alt="Leadership That Gets Results" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    href="https://t.co/3EvYSFM84F"
                    class="has-text-dark"
                    target="_blank">
                  Leadership That Gets Results
                </a>
              </h1>
              <h2 class="subtitle">webinar</h2>
              <p>Learn from a recent interview with Rob Hamilton, president of Med-Trans about what sets capable leaders apart from everyone else. Good communication and the ability to articulate and execute on a company’s strategy.</p>

              <div class="buttons m-t-2">

                <button
                    class="button is-success"
                    v-on:click="toggleYoutubeModal('cYtqCnlsBo8')">
                  Preview
                </button>

                <a
                    href="https://t.co/3EvYSFM84F"
                    target="_blank"
                    class="button is-primary">Watch the Webinar</a>

              </div>

            </div>
          </div>
        </section>

        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <iframe src='https://www.podbean.com/media/player/i9yxd-a14a9b?from=yiiadmin&download=1&version=1' data-link='https://www.podbean.com/media/player/i9yxd-a14a9b?from=yiiadmin&download=1&version=1' height='122' width='100%' frameborder='0' scrolling='no' data-name='pb-iframe-player' ></iframe>
            </div>
            <div class="column is-7">
              <h1 class="title">
                TalentTalk Radio with Chris Dyer
              </h1>
              <h2 class="subtitle">podcast</h2>
              <p>Lee Benson, CEO and Founder of Execute to Win recently appeared on TalentTalk Radio along with best-selling author Jacob Morgan for an  interview with TalentTalk Radio host Chris Dyer.  Jacob talks about the future of work and what that will look like for the coming generations, highlighting how some companies today are missing the mark on employee experience.    Lee Benson, the CEO of Execute to Win shares his thoughts on the importance of aligning all team members, and how this can easily bleed into successful employee engagement.</p>

              <a
                  href="https://www.podbean.com/media/player/i9yxd-a14a9b?from=yiiadmin&download=1&version=1"
                  target="_blank"
                  class="button is-primary m-t-2">
                Listen to Podcast
              </a>

            </div>
          </div>
        </section>

      </div>

    </div>
</template>

<script>
import ModalYoutube from '@/components/ModalYoutube.vue'

export default {

  components: {
    ModalYoutube
  },

  data () {
    return {

      activeYoutubeId: null,

      isShowYoutubeModal: false

    }
  },

  metaInfo () { return this.$store.getters['meta/showByPage']('events') },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })

    this.scrollReveal.reveal('.sr-up-interval', {
      interval: 100,
      origin: 'bottom',
      distance: '20px'
    })
  },

  methods: {

    toggleYoutubeModal (videoId) {
      this.activeYoutubeId = videoId
      setTimeout(function () {
        this.isShowYoutubeModal = true
      }.bind(this), 0)
    }

  }

}
</script>
