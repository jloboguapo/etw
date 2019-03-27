<template>
  <div>

    <div class="app-banner">
      <a
          class="banner"
          href="https://etw.splashthat.com/"
          target="blank">
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

<style>
  .app-banner {
    background-color: white;
    display: flex;
    height: 100px;
    left: 0;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 40;
  }

  .app-banner .banner {
    width: 100%;
    height: 100px;
    display: block;
    overflow: hidden;
    margin: 0 auto;
    background-image: url("../assets/images/events/etw-leaderboard.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100px;
  }
</style>
