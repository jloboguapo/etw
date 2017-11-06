/*
|--------------------------------------------------------------------------
| About Align.
|--------------------------------------------------------------------------
|
|
*/

export default {

  name: 'AboutAlign',

  data () {
    return {

      /**
       * About ETW Sections
       * @type {Array}
       */
      aboutETW: [{
        title: 'Increased Employee Engagement',
        body: "Transparency increases accountability and promotes a complete understanding of how each and every employee's role a ects the success of the company. Give employees transparency into top company goals for a highly engaged workforce.",
        image: '../../../../static/thumb_engagement.jpg'
      },
      {
        title: 'Ongoing Performance Development',
        body: 'Create development plans aligned with an employee’s goals. Emphasize career development and progression to create a culture of high performers throughout your entire organization.',
        image: '../../../../static/thumb_performance.jpg'
      }]
    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-about-etw-sections', {
      duration: 1000,
      delay: 200
    })
  }

}
