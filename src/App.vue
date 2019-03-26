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
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {

  components: {
    AppBanner,
    AppHeader,
    AppFooter
  }

}
</script>
