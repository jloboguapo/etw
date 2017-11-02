/*
|--------------------------------------------------------------------------
| Home Page.
|--------------------------------------------------------------------------
|
| The main landing page for the site.
|
*/

import AboutEtw from '@/views/home/about-etw/about-etw.vue'
import Intro from '@/views/home/intro/intro.vue'
import AboutUs from '@/views/home/about-us/about-us.vue'
import ProfessionalServices from '@/views/home/professional-services/professional-services.vue'
import Resources from '@/views/home/resources/resources.vue'
import Software from '@/views/home/software/software.vue'
import Testimonials from '@/views/home/testimonials/testimonials.vue'

export default {

  name: 'home',

  components: {
    AboutEtw,
    Intro,
    AboutUs,
    ProfessionalServices,
    Resources,
    Software,
    Testimonials
  }

}
