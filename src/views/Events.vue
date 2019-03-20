<template>
    <div>

      <modal-youtube
          :is-active="isShowYoutubeModal"
          :video-id="activeYoutubeId"
          v-on:close="isShowYoutubeModal = false">
      </modal-youtube>

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


         <!-- CAPABLE LEADERSHIP -->
        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  href="http://go.chiefexecutive.net/webinar-Capable-Leadership/"
                  target="_blank">
                <img
                    src="@/assets/images/events/capable_leadership.png"
                    alt="Join us for the Capable Leadership Webinar"
                    style="max-width: 370px;" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    href="http://go.chiefexecutive.net/webinar-Capable-Leadership/"
                    class="has-text-dark"
                    target="_blank">
                  What is "Capable Leadership? Why Does it Matter to Your Revenue?
                </a>
              </h1>
              <h2 class="subtitle">Webinar on March 26, 2019 at 2:00pm EST</h2>
              <p>Are your best employees leaving because they believe you are not investing in their development? When it comes to driving your organization forward, there’s nothing more important than capable leadership, the ability to motivate and coach your team to its highest potential. Lee Benson, Founder and CEO of ETW and Jack Welch, Former Chairman and CEO of General Electric Company will be featured guests on a webinar hosted by Chief Executive Group discussing the winning behaviors that today’s leaders will need to succeed.</p>

              <div class="buttons m-t-2">

                <a
                    href="http://go.chiefexecutive.net/webinar-Capable-Leadership/"
                    target="_blank"
                    class="button is-primary">Register Now</a>

              </div>

            </div>
          </div>
        </section>


        <!-- LEADERHIP SUMMIT -->
        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  href="https://etw.splashthat.com/"
                  target="_blank">
                <img
                    src="@/assets/images/events/leadership_summit.png"
                    alt="Join us for the Network Leadership Summit"
                    style="max-width: 370px;" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    href="https://etw.splashthat.com/"
                    class="has-text-dark"
                    target="_blank">
                  Join us for the Network Leadership Summit
                </a>
              </h1>
              <h2 class="subtitle">April 9, 2019</h2>
              <p>The inaugural Network Leadership Summit will provide fresh perspectives from of some of the country’s most admired authors, management coaches, entrepreneurs and People leaders. This dynamic half-day program is set for 7:30 a.m. to 1:10 p.m., April 9 at The Showcase Room, located inside The Yard at Tempe’s Farmer Arts District.</p>

              <div class="buttons m-t-2">

                <a
                    href="https://etw.splashthat.com/"
                    target="_blank"
                    class="button is-primary">Register Now</a>

              </div>

            </div>
          </div>
        </section>

        <!-- JED NORDEN -->
        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  href="https://offers.etw.com/how-ceos-can-get-better-results-2"
                  target="_blank">
                <img
                    src="@/assets/images/events/jed_norden.jpg"
                    alt="How CEOs Can Get Better Results" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    href="https://offers.etw.com/how-ceos-can-get-better-results-2"
                    class="has-text-dark"
                    target="_blank">
                  How CEOs Can Get Better Results
                </a>
              </h1>
              <h2 class="subtitle">webinar</h2>
              <p>Many CEOs are challenged with building the right bench strength and executing their strategic plan. Lee Benson, CEO & Founder of ETW recently met with Jed Norden to discuss some of the proven and practical things that CEOs can do to produce sustainable results this year. Jed has held strategic senior leadership positions in human resources and operations management in Fortune 500 manufacturing, service and retail companies.</p>

              <div class="buttons m-t-2">

                <button
                    class="button is-success"
                    v-on:click="toggleYoutubeModal('tWb_NZRLPek')">
                  Preview
                </button>

                <a
                    href="https://offers.etw.com/how-ceos-can-get-better-results-2"
                    target="_blank"
                    class="button is-primary">Watch the Webinar</a>

              </div>

            </div>
          </div>
        </section>
        <!-- end Jed Norden -->

        <!-- ROB HAMILTON MED TRANS -->
        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  href="https://t.co/3EvYSFM84F"
                  target="_blank">
                <img
                    src="@/assets/images/events/rob_hamilton_med_trans.jpg"
                    alt="Leadership That Gets Results" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                <a
                    href="https://t.co/3EvYSFM84F"
                    class="has-text-dark"
                    target="_blank">
                  Leadership That Gets Results
                </a>
              </h1>
              <h2 class="subtitle">webinar</h2>
              <p>Learn from a recent interview with Rob Hamilton, president of Med-Trans about what sets capable leaders apart from everyone else. Good communication and the ability to articulate and execute on a company’s strategy.</p>

              <div class="buttons m-t-2">

                <button
                    class="button is-success"
                    v-on:click="toggleYoutubeModal('cYtqCnlsBo8')">
                  Preview
                </button>

                <a
                    href="https://t.co/3EvYSFM84F"
                    target="_blank"
                    class="button is-primary">Watch the Webinar</a>

              </div>

            </div>
          </div>
        </section>
        <!-- end Med Trans -->

        <!-- TALENT TALK -->
        <section class="section sr-up-interval">
          <div class="columns is-variable is-8">
            <div class="column is-5 has-text-right">
              <a
                  href="https://www.podbean.com/media/player/i9yxd-a14a9b?from=yiiadmin&download=1&version=1"
                  target="_blank">
                <img
                    src="@/assets/images/events/talent_talk.jpg"
                    alt="TalentTalk Radio with Chris Dyer" />
              </a>
            </div>
            <div class="column is-7">
              <h1 class="title">
                TalentTalk Radio with Chris Dyer
              </h1>
              <h2 class="subtitle">podcast</h2>
              <p>Lee Benson, CEO and Founder of Execute to Win recently appeared on TalentTalk Radio along with best-selling author Jacob Morgan for an  interview with TalentTalk Radio host Chris Dyer.  Jacob talks about the future of work and what that will look like for the coming generations, highlighting how some companies today are missing the mark on employee experience.    Lee Benson, the CEO of Execute to Win shares his thoughts on the importance of aligning all team members, and how this can easily bleed into successful employee engagement.</p>

              <a
                  href="https://www.podbean.com/media/player/i9yxd-a14a9b?from=yiiadmin&download=1&version=1"
                  target="_blank"
                  class="button is-primary m-t-2">
                Listen to Podcast
              </a>

            </div>
          </div>
        </section>
        <!-- end Talent Talk -->

      </div>

    </div>
</template>

<script>
import ModalYoutube from '@/components/ModalYoutube.vue'

export default {

  components: {
    ModalYoutube
  },

  data () {
    return {

      activeYoutubeId: null,

      isShowYoutubeModal: false

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
  },

  methods: {

    toggleYoutubeModal (videoId) {
      this.activeYoutubeId = videoId
      setTimeout(function () {
        this.isShowYoutubeModal = true
      }.bind(this), 0)
    }

  }

}
</script>
