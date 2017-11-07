/*
|--------------------------------------------------------------------------
| Hero Introduction.
|--------------------------------------------------------------------------
|
|
*/

import { videoPlayer } from 'vue-video-player'

export default {

  name: 'Intro',

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
          src: 'https://02-lvl3-pdl.vimeocdn.com/01/180/4/100902001/271028419.mp4?expires=1509599136&token=04f1ac56311c05c57f23c'
        }],
        fluid: true
      }
    }
  },

  created () {
    this.setupTypeform()
  },

  mounted () {
    this.scrollReveal.reveal('.sr-intro-title', {
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
    },

    /**
     * Import the necessary scripts to run
     * the typeform questionair
     */
    setupTypeform () {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm_share',
        b = 'https://embed.typeform.com/'

      if (!gi.call(d, id)) {
        js = ce.call(d, 'script')
        js.id = id; js.src = b + 'embed.js'
        q = gt.call(d, 'script')[0]
        q.parentNode.insertBefore(js, q)
      }
    }
  }

}
