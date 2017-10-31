/*
|--------------------------------------------------------------------------
| Section Software Introduction.
|--------------------------------------------------------------------------
|
| The Introduction to the software.
|
*/

export default {

  name: 'sectionSoftwareIntro',

  mounted () {
    this.scrollReveal.reveal('.sr-software-intro-title', {
      origin: 'top',
      duration: 1500,
      viewFactor: 0.8
    })
  }

}
