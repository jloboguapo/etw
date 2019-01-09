<template>
  <header>
      <nav
          class="navbar is-dark is-transparent masthead animated"
          v-bind:class="{ 'is-scroll': isScroll, 'fadeInDown': isScrollUp, 'fadeOutUp': isScrollDown }">

        <div class="container">

          <!-- BRANDING AND MOBILE MENU -->
          <div class="navbar-brand">

            <!-- logo -->
            <router-link :to="{ name: 'home' }" class="navbar-item m-r-2">
              <img src="@/assets/images/brand/brand-horizontal-light.svg" alt="ETW : Execute To Win">
            </router-link>

            <!-- hamburger menu -->
            <div class="navbar-item m-l-a is-hidden-desktop">
              <div class="menu-icon" v-bind:class="{ 'is-active': isActiveMenu }" @click="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </div>

          <!-- RESPONSIVE MENU -->
          <div class="navbar-menu" v-bind:class="{ 'is-active animated fadeInRight': isActiveMenu }">
            <div class="navbar-end">

              <router-link :to="{ name: 'home' }" class="navbar-item">
                <div @click="hideMenu()"><strong>Home</strong></div>
              </router-link>

              <router-link :to="{ name: 'about' }" class="navbar-item">
                <div @click="hideMenu()"><strong>About</strong></div>
              </router-link>

              <router-link :to="{ name: 'services' }" class="navbar-item">
                <div @click="hideMenu()"><strong>Professional Services</strong></div>
              </router-link>

              <router-link :to="{ name: 'software' }" class="navbar-item">
                <div @click="hideMenu()"><strong>Software</strong></div>
              </router-link>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <strong>Resources</strong>
                </a>
                <div class="navbar-dropdown is-boxed">
                  <router-link :to="{ name: 'customerSuccess' }" class="navbar-item">
                    <div @click="hideMenu()"><strong>Customer Success</strong></div>
                  </router-link>
                  <router-link :to="{ name: 'events' }" class="navbar-item">
                    <div @click="hideMenu()"><strong>Events</strong></div>
                  </router-link>
                  <router-link :to="{ name: 'knowledgeCenter' }" class="navbar-item">
                    <div @click="hideMenu()"><strong>Knowledge Center</strong></div>
                  </router-link>
                </div>
              </div>

              <router-link :to="{ name: 'contact' }" class="navbar-item">
                <div @click="hideMenu()"><strong>Contact</strong></div>
              </router-link>

              <a href="https://blog.etw.com" class="navbar-item p-r-3">
                <strong>Blog</strong>
              </a>

              <div class="navbar-item">
                <div class="field">
                  <div class="control">
                    <a href="https://app.prod.etw.com" class="button is-primary is-rounded">
                      <strong>Login</strong>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </nav>
  </header>
</template>

<script>

let resizeTimeout

function resizeThrottler (actualResizeHandler) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()
      // 15fps
    }, 66)
  }
}

export default {

  data () {
    return {

      isActiveMenu: false,

      isScroll: false,

      currentScrollY: 0,

      isScrollUp: false,

      isScrollDown: false

    }
  },

  mounted () {
    window.addEventListener('scroll', this.scrollListener)
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  },

  methods: {

    handleScroll () {
      this.isScroll = window.scrollY !== 0

      if (window.scrollY > 0) {
        this.isScrollDown = window.scrollY > this.currentScrollY
        this.isScrollUp = window.scrollY < this.currentScrollY
      } else {
        this.isScrollDown = false
        this.isScrollUp = false
      }

      this.currentScrollY = window.scrollY
    },

    scrollListener () {
      resizeThrottler(this.handleScroll)
    },

    toggleMenu () {
      this.isActiveMenu = !this.isActiveMenu
    },

    /**
     * Hide the menu on mobile when link selected
     */
    hideMenu () {
      this.isActiveMenu = false
    }

  }
}
</script>
