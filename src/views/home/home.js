/*
|--------------------------------------------------------------------------
| Home Page.
|--------------------------------------------------------------------------
|
|
*/

import AboutEtw from '@/views/home/about-etw/about-etw.vue'
import Intro from '@/views/home/intro/intro.vue'
import ProfessionalServices from '@/views/home/professional-services/professional-services.vue'
import Software from '@/views/home/software/software.vue'
import Testimonials from '@/views/home/testimonials/testimonials.vue'
import Cta from '@/views/home/cta/cta.vue'

export default {

  name: 'home',

  components: {
    AboutEtw,
    Cta,
    Intro,
    ProfessionalServices,
    Software,
    Testimonials
  }

}
