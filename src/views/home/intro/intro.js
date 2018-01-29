/*
|--------------------------------------------------------------------------
| Hero Introduction.
|--------------------------------------------------------------------------
|
|
*/

import ModalHubspot from '@/components/modal-hubspot/modal-hubspot.vue'
import { videoPlayer } from 'vue-video-player'
import 'videojs-youtube/dist/Youtube.min.js'

export default {

  components: {
    ModalHubspot,
    videoPlayer
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
        techOrder: ['youtube'],
        sources: [{
          type: 'video/youtube',
          src: 'https://www.youtube.com/watch?v=EakfI3qrPOA'
        }],
        fluid: true
      }

    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
      duration: 1000,
      opacity: 1,
      scale: 1,
      origin: 'top'
    })

    this.scrollReveal.reveal('.sr-bullets', {
      duration: 400,
      delay: 100,
      scale: 1,
      origin: 'top'
    }, 400)
  },

  methods: {

    /**
     * Toggle the contact Modal
     * @return {none}
     */
    toggleHubspotModal () {
      this.isShowHubspotModal = !this.isShowHubspotModal
    },

    /**
     * Show/Hide the intro video modal
     * @return {none}
     */
    toggleVideoModal () {
      this.isShowVideoModal = !this.isShowVideoModal

      if (!this.isShowVideoModal) {
        this.$refs.videoPlayer.player.pause()
      } else {
        this.$refs.videoPlayer.player.play()
      }
    }

  }

}
