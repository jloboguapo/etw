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

        <section
            v-for="event in events"
            v-bind:key="event.link"
            class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  v-bind:href="event.link"
                  target="_blank">
                <img
                    v-bind:src="event.image"
                    v-bind:alt="event.title" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    v-bind:href="event.link"
                    class="has-text-dark"
                    target="_blank">
                  {{ event.title }}
                </a>
              </h1>
              <h2 class="subtitle">{{ event.type }}</h2>
              <p>{{ event.description }}</p>

              <div class="buttons m-t-2">

                <!-- video preview -->
                <button
                    class="button is-success"
                    v-if="event.previewVideo"
                    v-on:click="toggleYoutubeModal(event.previewVideo)">
                  Preview
                </button>

                <a
                    v-bind:href="event.link"
                    target="_blank"
                    class="button is-primary">View Details</a>

              </div>

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

      events: [
        {
          image: require('@/assets/images/case-studies/images/rob_hamilton_med_trans.jpg'),
          title: 'Leadership That Gets Results',
          type: 'webinar',
          description: `Learn from a recent interview with Rob Hamilton, president of Med-Trans about what sets capable leaders apart from everyone else. Good communication and the ability to articulate and execute on a company’s strategy.`,
          link: 'https://t.co/3EvYSFM84F',
          previewVideo: 'cYtqCnlsBo8'
        }
      ],

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
