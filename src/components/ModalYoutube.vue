<template>
  <div
      class="modal modal-video is-wide animated fadeIn"
      v-bind:class="{ 'is-active': isActive }">

    <div
        class="modal-background"
        v-on:click="closeModal()" />

    <div class="modal-content">
      <div class="content">
        <youtube
            :video-id="videoId"
            :player-vars="videoPlayerOptions"
            ref="youtube"
            id="modal-youtube-player" />
      </div>
    </div>

    <button
        class="modal-close is-large"
        aria-label="close"
        v-on:click="closeModal()" />

  </div>
</template>

<script>

export default {

  props: {

    /**
     * Is the modal active
     * @type {Object}
     */
    isActive: {
      default: false,
      type: Boolean
    },

    /**
     * Youtube's video Id, ex. EakfI3qrPOA
     * @type {Object}
     */
    videoId: {
      type: String
    }

  },

  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },

  data () {
    return {

      videoPlayerOptions: {
        autoplay: 0
      }

    }
  },

  methods: {

    closeModal () {
      this.$emit('close')
    },

    toggleModal () {
      if (this.isActive) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    }

  },

  watch: {

    isActive: function (newValue, oldValue) {
      this.toggleModal()
    }

  }

}

</script>

<style>
  #modal-youtube-player {
    width: 80vw;
    height: 80vh;
  }
</style>
