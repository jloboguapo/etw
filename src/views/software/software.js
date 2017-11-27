import Pricing from '@/views/software/pricing/pricing.vue'

export default {

  components: {
    Pricing
  },

  data () {
    return {

      /**
       * Focus on Results Sections
       * @type {Array}
       */
      results: [
        {
          title: 'Increased Employee Alignment',
          body: "Transparency increases accountability and promotes a complete understanding of how each and every employee's role affects the success of the company. Give employees transparency into top company goals for a highly engaged workforce.",
          image: '../../../../static/images/thumbnails/engagement.jpg'
        },
        {
          title: 'Ongoing Employee Development',
          body: 'Create development plans aligned with an employee’s goals. Emphasize career development and progression to create a culture of high performers throughout your entire organization.',
          image: '../../../../static/images/thumbnails/performance.jpg'
        }
      ]
    }
  },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })

    this.scrollReveal.reveal('.sr-down', {
      origin: 'top'
    })

    this.scrollReveal.reveal('.sr-left', {
      origin: 'left'
    })

    this.scrollReveal.reveal('.sr-left-delay', {
      origin: 'left',
      delay: 100
    })

    this.scrollReveal.reveal('.sr-app-store', {
      origin: 'left',
      delay: 100
    })

    this.scrollReveal.reveal('.sr-google-play', {
      origin: 'right',
      delay: 150
    })

    this.scrollReveal.reveal('.sr-screenshots', {
      delay: 300
    })

    this.scrollReveal.reveal('.sr-goal-card', {
      duration: 1000,
      origin: 'bottom',
      distance: '300px',
      scale: 1,
      opacity: 1,
      reset: false
    })

    this.scrollReveal.reveal('.sr-note-1', {
      delay: 1000,
      reset: false,
      origin: 'left'
    })

    this.scrollReveal.reveal('.sr-note-2', {
      delay: 1500,
      afterReveal: (domEl) => {
        domEl.classList.add('animated')
        domEl.classList.add('shake')
      },
      reset: false,
      origin: 'right'
    })
  }

}
