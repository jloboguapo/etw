/*
|--------------------------------------------------------------------------
| Section Pricing.
|--------------------------------------------------------------------------
|
| The pricing for the software.
|
*/

export default {

  name: 'sectionPricing',

  mounted () {
    this.scrollReveal.reveal('.sr-pricing-title')

    this.scrollReveal.reveal('.sr-pricing-subtitle', {
      delay: 100
    })
  }

}
