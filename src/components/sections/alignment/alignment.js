/*
|--------------------------------------------------------------------------
| Alignment Slide.
|--------------------------------------------------------------------------
|
| A slide about aligning people to culture and strategy.
|
*/

import { videoPlayer } from 'vue-video-player'

export default {

  name: 'slideAlignment',

  components: {
    videoPlayer
  },

  data () {
    return {

      /**
       * Is the modal for the video player
       * visible/hidden
       * @type {Boolean}
       */
      isShowModal: false,

      /**
       * For Alignment video playback
       * @type {Object}
       */
      videoPlayerOptions: {
        sources: [{
          type: 'video/mp4',
          src: 'https://15-lvl3-pdl.vimeocdn.com/01/3784/1/43922574/152650124.mp4?expires=1509477622&token=04ec05e0d7b94a86b981b'
        }],
        fluid: true
      }
    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-alignment-title', {
      duration: 1000,
      opacity: 1,
      scale: 1,
      origin: 'top'
    })

    this.scrollReveal.reveal('.bullets', {
      duration: 400,
      delay: 100,
      scale: 1,
      origin: 'top'
    }, 400)
  },

  methods: {

    /**
     * Show/Hide the intro video modal
     * @return {none}
     */
    toggleModal () {
      this.isShowModal = !this.isShowModal

      if (!this.isShowModal) {
        this.$refs.videoPlayer.player.pause()
      } else {
        this.$refs.videoPlayer.player.play()
      }
    }
  }

}
