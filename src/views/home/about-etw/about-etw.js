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
        title: 'Increased Employee Engagement',
        body: "Transparency increases accountability and promotes a complete understanding of how each and every employee's role a ects the success of the company. Give employees transparency into top company goals for a highly engaged workforce.",
        image: '../../../../static/thumb_engagement.jpg'
      },
      {
        title: 'Ongoing Performance Development',
        body: 'Create development plans aligned with an employee’s goals. Emphasize career development and progression to create a culture of high performers throughout your entire organization.',
        image: '../../../../static/thumb_performance.jpg'
      },
      {
        title: 'Help Your Managers Become Coaches',
        body: 'Spend less time doing and more time developing talent to increase overall efficiency and productivity. As managers become coaches, employees become problem solvers.',
        image: '../../../../static/thumb_graph.jpg'
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
