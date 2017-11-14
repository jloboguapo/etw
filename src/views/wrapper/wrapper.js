/*
|--------------------------------------------------------------------------
| wrapper.
|--------------------------------------------------------------------------
|
| This wraps the entire site and brings in the components for all
| sub pages.
|
*/

import FooterWeb from '@/components/footer/footer.vue'
import HeaderWeb from '@/components/header/header.vue'

export default {

  components: {
    HeaderWeb,
    FooterWeb
  }

}
