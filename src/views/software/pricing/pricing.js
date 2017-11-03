/*
|--------------------------------------------------------------------------
| Pricing Table.
|--------------------------------------------------------------------------
|
|
*/

export default {

  name: 'Pricing',

  data () {
    return {

      activePricingTab: 'annual'

    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-pricing-title')

    this.scrollReveal.reveal('.sr-pricing-subtitle', {
      delay: 100
    })
  },

  methods: {

    setPricingTab (activePricingTab) {
      this.activePricingTab = activePricingTab
    }

  }

}
