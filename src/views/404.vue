<template>
  <section class="hero is-black is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          404
        </h1>
        <h2 class="subtitle">
          The page you are looking for could not be found.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo () { return this.$store.getters['meta/showByPage']('notFound') }
}
</script>
