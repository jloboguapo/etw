/*
|--------------------------------------------------------------------------
| Home Page.
|--------------------------------------------------------------------------
|
| The main landing page for the site.
|
*/

import Alignment from '@/views/home/alignment/alignment.vue'
import AboutEtw from '@/views/home/about-etw/about-etw.vue'
import ProfessionalServices from '@/views/home/professional-services/professional-services.vue'
import Testimonials from '@/views/home/testimonials/testimonials.vue'
import Software from '@/views/home/software/software.vue'
import Resources from '@/views/home/resources/resources.vue'

export default {

  name: 'home',

  components: {
    Alignment,
    AboutEtw,
    ProfessionalServices,
    Testimonials,
    Software,
    Resources
  }

}
