/*
|--------------------------------------------------------------------------
| Pricing Table.
|--------------------------------------------------------------------------
|
|
*/

export default {

  name: 'Pricing',

  mounted () {
    this.scrollReveal.reveal('.sr-pricing-title')

    this.scrollReveal.reveal('.sr-pricing-subtitle', {
      delay: 100
    })
  }

}
