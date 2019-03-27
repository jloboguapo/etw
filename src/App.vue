<template>
  <div id="app">
    <app-banner />
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppBanner from '@/components/AppBanner.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {

  components: {
    AppBanner,
    AppFooter,
    AppHeader
  }

}
</script>
