/*
|--------------------------------------------------------------------------
| About ETW Slide.
|--------------------------------------------------------------------------
|
| A slide about ETW.
|
*/

export default {

  name: 'AboutETW',

  data () {
    return {
      aboutETW: [{

      }]
    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-about-media-engagement', {
      duration: 1000,
      origin: 'left'
    })

    this.scrollReveal.reveal('.sr-about-media-performance', {
      duration: 1000,
      origin: 'bottom'
    })

    this.scrollReveal.reveal('.sr-about-media-graph', {
      duration: 1000,
      origin: 'right'
    })

    this.scrollReveal.reveal('.sr-section-bms-title')

    this.scrollReveal.reveal('.sr-section-bms-text-1')

    this.scrollReveal.reveal('.sr-section-bms-text-2')

    this.scrollReveal.reveal('.sr-section-bms-button', {
      delay: 200
    })
  }

}
