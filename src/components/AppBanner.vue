<template>
  <div>

    <div class="p-t-_5 has-text-centered">
      <!-- IMAGE BANNER -->
      <a
          href="https://etw.splashthat.com/"
          target="blank">
        <img
            src="@/assets/images/events/etw-leaderboard.jpg"
            alt="Join us for the Capable Leadership Webinar">
      </a>
    </div>

    <!-- MODAL -->
    <div
        class="modal"
        v-bind:class="{ 'is-active': isModalActive }">

      <!-- modal backdrop -->
      <div
          class="modal-background"
          v-on:click="closeModal">
      </div>

      <div class="modal-content animated fadeIn">
        <a href="https://etw.splashthat.com/" target="blank">
          <img src="@/assets/images/events/Leadership_pop.png">
        </a>
      </div>

      <button
          class="modal-close is-large"
          v-on:click="closeModal"
          aria-label="close">
      </button>
    </div>

</div>

</template>

<script type="text/javascript">
export default {

  data () {
    return {
      isModalActive: false
    }
  },

  created () {
    setTimeout(function () {
      this.isModalActive = true
    }.bind(this), 3000)
  },

  methods: {
    closeModal () {
      this.isModalActive = false
    }
  }
}

</script>
