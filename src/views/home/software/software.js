/*
|--------------------------------------------------------------------------
| Software.
|--------------------------------------------------------------------------
|
|
*/

export default {

  name: 'Software',

  mounted () {
    this.scrollReveal.reveal('.sr-section-software-title', {
      origin: 'bottom',
      scale: 1
    })

    this.scrollReveal.reveal('.sr-section-software-subtitle', {
      origin: 'bottom',
      delay: 200,
      scale: 1
    })
  }

}
