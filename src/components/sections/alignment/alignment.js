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
          src: 'https://video-dft4-3.xx.fbcdn.net/v/t43.1792-2/22740431_508372512868956_6390087677684744192_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&oh=7d99106d4682a542c8501fb48d624ec3&oe=59F3E036'
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
