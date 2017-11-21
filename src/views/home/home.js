import Intro from '@/views/home/intro/intro.vue'
import Testimonials from '@/views/home/testimonials/testimonials.vue'

export default {

  components: {
    Intro,
    Testimonials
  },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })
  }

}
