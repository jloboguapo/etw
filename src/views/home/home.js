/*
|--------------------------------------------------------------------------
| Home Page.
|--------------------------------------------------------------------------
|
| The main landing page for the site.
|
*/

import SectionAlignment from '@/components/sections/alignment/alignment.vue'
import SectionAboutEtw from '@/components/sections/about-etw/about-etw.vue'
import SectionProfessionalServices from '@/components/sections/professional-services/professional-services.vue'
import SectionTestimonials from '@/components/sections/testimonials/testimonials.vue'
import SectionSoftware from '@/components/sections/software/software.vue'
import SectionResources from '@/components/sections/resources/resources.vue'

export default {

  name: 'home',

  components: {
    SectionAlignment,
    SectionAboutEtw,
    SectionProfessionalServices,
    SectionTestimonials,
    SectionSoftware,
    SectionResources
  }

}
