/*
|--------------------------------------------------------------------------
| Testimonials.
|--------------------------------------------------------------------------
|
| The reviews and case studies of ETW.
|
*/

export default {

  data () {
    return {

      primaryTestimonials: [{
        company: 'OpenWorks',
        quote: "If growth is the enemy of culture, ETW has allowed us to create a like culture in each of the offices we’ve opened. I can walk into our farthest office and know what to expect culture-wise.",
        author: 'David Bosley',
        role: 'Executive Vice President',
        caseStudy: 'http://etw.com/assets/pdf/Case%20Study-%20OpenWorks.pdf',
        headshot: './static/case-study-headshots/david_bosley_openworks.jpg'
      }, {
        company: 'Able Aerospace Services',
        quote: 'In one fiscal year, Able set out to uncover an additional 25% capacity. The goal was implemented in ETW, and ended up uncovering an additional 40% capacity. This saved Able from hiring 100 unnecessary employees.',
        author: 'Lee Benson',
        role: 'CEO',
        caseStudy: 'http://etw.com/assets/pdf/Case_Study-Able_Aerospace.pdf',
        headshot: './static/case-study-headshots/lee_benson_etw.png'
      }, {
        company: 'US ChemCare',
        quote: "ETW helped drive turnaround results in just 3 months. EBITDA improved by over 20% and NPS scores for both customers and employees improved from the worst performing to the best performing in the organization!",
        author: 'Ray Cook',
        role: 'CHMM, Operations Manager',
        caseStudy: 'http://etw.com/assets/pdf/Case%20Study-%20Chemical%20Distribution%20Turnaround.pdf',
        headshot: './static/case-study-headshots/univar.jpg'
      }, {
        company: 'Air Evac Lifeteam',
        quote: "After seeing the incredible success we have had at AEL, taking ETW enterprise-wide was an easy decision for the leadership team.",
        author: 'Seth Myers',
        role: 'President',
        caseStudy: 'http://etw.com/assets/pdf/Case%20Study-%20Air%20Evac%20Lifeteam.pdf',
        headshot: './static/case-study-headshots/seth_myers_air_evac.png'
      }, {
        company: 'Sunshine Acres',
        quote: "“It’s great to see children where they started and move up the graphs in better academics and behaviors–when we first started had quite a few kids in the red. ETW helps us see the kids who are doing well and bring more focus to those falling behind. Those insights are invaluable.",
        author: 'Kevin Humphrey',
        role: 'Executive Director',
        caseStudy: 'http://offers.etw.com/hubfs/Case%20Study%20+%20Use%20Case/Case%20Study-Sunshine%20Acres.pdf',
        headshot: './static/case-study-headshots/kevin_humphrey_sunshine.jpg'
      }]
    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-testimonials-title')
    this.scrollReveal.reveal('.sr-testimonials-button-play', {
      delay: 100
    })
  }

}
