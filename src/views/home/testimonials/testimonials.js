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

      /**
       * All testimonials
       * @type {Array}
       */
      testimonials: [{
        company: 'OpenWorks',
        quote: 'If growth is the enemy of culture, ETW has allowed us to create a like culture in each of the offices we’ve opened. I can walk into our farthest office and know what to expect culture-wise.',
        author: 'David Bosley',
        role: 'Executive Vice President',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/Openworks%20Case%20Study.pdf',
        headshot: './static/case-studies/images/david_bosley_openworks.png'
      }, {
        company: 'Able Aerospace Services',
        quote: 'In one fiscal year, Able set out to uncover an additional 25% capacity. The goal was implemented in ETW, and ended up uncovering an additional 40% capacity. This saved Able from hiring 100 unnecessary employees.',
        author: 'Lee Benson',
        role: 'CEO',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/Able%20Case%20Study.pdf',
        headshot: './static/case-studies/images/lee_benson_etw.jpg'
      }, {
        company: 'US ChemCare',
        quote: 'ETW helped drive turnaround results in just 3 months. EBITDA improved by over 20% and NPS scores for both customers and employees improved from the worst performing to the best performing in the organization!',
        author: 'Ray Cook',
        role: 'CHMM, Operations Manager',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/Chemical%20Distribution%20Turnaround%20Case%20Study.pdf',
        headshot: './static/case-studies/images/univar.jpg'
      }, {
        company: 'Air Evac Lifeteam',
        quote: 'After seeing the incredible success we have had at AEL, taking ETW enterprise-wide was an easy decision for the leadership team.',
        author: 'Seth Myers',
        role: 'President',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/AEL%20Case%20Study.pdf',
        headshot: './static/case-studies/images/seth_myers_air_evac.png'
      }, {
        company: 'Small Miracles',
        quote: 'As the CEO of our company, ETW allows me to connect with all of our team members while also being held accountable for my commitments in my role.',
        author: 'Keir Cochran',
        role: 'CEO',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/Small%20Miracles%20Case%20Study.pdf',
        headshot: './static/case-studies/images/keir_cochran_small_miracles.jpg'
      }, {
        company: 'Maricopa Health Foundation',
        quote: 'The biggest thing I saw that needed to happen at all levels was develop trust. The transparency found with the ETW system was going to be the way that we could establish that.',
        author: 'Nate Lowrie',
        role: 'CEO',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/Maricopa%20Health%20Case%20Study.pdf',
        headshot: './static/case-studies/images/nate_lowrie_maricopa_health_foundation.png'
      }, {
        company: ' Eagle Copters Ltd.',
        quote: 'The ETW team helped us to get from Point A to Point B when we weren’t even sure what Point B needed to be. The professional services provided by the ETW implementation team really made all the difference for us. Now the whole organization likes to see that there is a clear strategy to execution, and consistent communication around goals and accountability.',
        author: 'Barry Kohler',
        role: 'President & CEO',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Success%20Stories/Eagle%20Copters%20Success%20Story.pdf',
        headshot: './static/case-studies/images/barry_kohler_eagle_copters.png'
      }, {
        company: 'Sunshine Acres',
        quote: 'It’s great to see children where they started and move up the graphs in better academics and behaviors–when we first started had quite a few kids in the red. ETW helps us see the kids who are doing well and bring more focus to those falling behind. Those insights are invaluable.',
        author: 'Kevin Humphrey',
        role: 'Executive Director',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Case%20Studies/Sunshine%20Acres%20Case%20Study.pdf',
        headshot: './static/case-studies/images/kevin_humphrey_sunshine.png'
      }, {
        company: 'NCI Building Systems, Inc.',
        quote: 'The execution by the ETW Team was really quite masterful as they demonstrated how creating your mission, vision and purpose should not just be a marketing activity. It should really be about aligning your people. Our leadership team is now much more cohesive as a result of the ETW workshops.',
        author: 'Katy Theroux',
        role: 'Chief Human Resources Officer',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Success%20Stories/NCI%20Success%20Story.pdf',
        headshot: './static/case-studies/images/katy_theroux_nci.jpg'
      }, {
        company: 'Mid-States Concrete Industries',
        quote: 'ETW has given us a tool where we are able to collect all of our major objectives. When people don’t think or prioritize strategically, they are actually flying a little blind. Not many people look at their strategic plan on a daily, or even weekly, basis. Having it in front of you, at your fingertips makes it extremely easy to know where your organization stands, at any moment.',
        author: 'Hagen Harker',
        role: 'President',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Success%20Stories/Mid-states%20Concrete%20Success%20Story.pdf',
        headshot: './static/case-studies/images/hagen_harker_mid_states.png'
      }, {
        company: 'Use Case',
        quote: 'ETW provides the operating system to help charter school leadership teams keep teacher best practices consistent. Whether that consistency is between classrooms or across campuses, ETW aides these leaders in developing their playbook for campus expansion and scholar success.',
        author: 'ETW in Charter Schools',
        role: 'Vista College Preparatory',
        caseStudy: 'https://offers.etw.com/hubfs/Content%20Offers/Use%20Case/Charter%20School%20Use%20Case.pdf',
        headshot: './static/case-studies/images/charter_schools_vista.png'
      }],

      /**
       * Only display so many on page load
       * @type {[type]}
       */
      limitTestimonials: 3,

      /**
       * To show/hide the show more button
       * @type {Boolean}
       */
      isShowMoreTestimonials: true
    }
  },

  computed: {
    filteredTestimonials () {
      return _.slice(_.shuffle(this.testimonials), 0, this.limitTestimonials)
    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })
  },

  methods: {
    showMoreTestimonials () {
      this.isShowMoreTestimonials = false
      this.limitTestimonials = this.testimonials.length
    }
  }

}
