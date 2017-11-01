/*
|--------------------------------------------------------------------------
| wrapper.
|--------------------------------------------------------------------------
|
| This wraps the entire site and brings in the components for all
| sub pages.
|
*/

import HeaderWeb from '@/components/header/header.vue'
import FooterWeb from '@/components/footer/footer.vue'

export default {

  name: 'wrapper',

  components: {
    HeaderWeb,
    FooterWeb
  }

}
