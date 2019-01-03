<template>
    <div>

      <section class="hero is-dark hero-privacy-intro p-t-5">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-1 has-text-centered sr-up">
              Events
            </h1>
            <h2 class="subtitle has-text-centered sr-up-delay">
              On-demand webinars, podcast recordings, and upcoming events
            </h2>
          </div>
        </div>
      </section>

      <div class="container">

        <section
            v-for="event in events"
            v-bind:key="event.link"
            class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <img
                  v-bind:src="event.image"
                  v-bind:alt="event.title" />
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    v-bind:href="event.link"
                    class="has-text-dark"
                    target="_blank">
                  {{ event.title }}
                </a>
              </h1>
              <h2 class="subtitle">{{ event.type }}</h2>
              <p>{{ event.description }}</p>
              <a
                  v-bind:href="event.link"
                  target="_blank"
                  class="button is-primary m-t-2">View Details</a>
            </div>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
export default {

  data () {
    return {

      events: [
        {
          image: 'https://offers.etw.com/hs-fs/hubfs/Untitled-6.png?width=370&name=Untitled-6.png',
          title: 'Leadership That Gets Results',
          type: 'webinar',
          description: `Learn from a recent interview with Rob Hamilton, president of Med-Trans about what sets capable leaders apart from everyone else. Good communication and the ability to articulate and execute on a company’s strategy.`,
          link: 'https://t.co/3EvYSFM84F'
        }
      ]

    }
  },

  metaInfo () { return this.$store.getters['meta/showByPage']('events') },

  mounted () {
    this.scrollReveal.reveal('.sr-up')

    this.scrollReveal.reveal('.sr-up-delay', {
      delay: 100
    })

    this.scrollReveal.reveal('.sr-up-interval', {
      interval: 100,
      origin: 'bottom',
      distance: '20px'
    })
  }

}
</script>
