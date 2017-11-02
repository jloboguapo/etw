/*
|--------------------------------------------------------------------------
| Professional Services.
|--------------------------------------------------------------------------
|
|
*/

export default {

  name: 'ProfessionalServices',

  mounted () {
    this.scrollReveal.reveal('.sr-section-services-title', {
      origin: 'bottom',
      scale: 1
    })

    this.scrollReveal.reveal('.sr-section-services-text', {
      delay: 100
    })

    this.scrollReveal.reveal('.sr-section-services-button', {
      duration: 500,
      delay: 200
    })
  }

}
