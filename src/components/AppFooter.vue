<template>
  <footer class="site-footer">
    <div class="section bg-white-ter">
      <div class="container">
        <div class="columns">
          <div class="column">
            <router-link :to="{ name: 'home' }" class="brand">
              <img src="@/assets/images/brand/brand-horizontal.svg" alt="ETW : Execute To Win">
            </router-link>

            <div class="m-b-_5 m-t-1">
              <span class="tag is-white is-medium is-rounded p-x-2">
                Follow Us
              </span>
            </div>

            <div class="buttons">
              <a href="https://www.linkedin.com/company/2552712/" target="_blank" class="button is-light">
                <i class="icon-linkedin"></i>
              </a>

              <a href="https://www.facebook.com/ETW.executetowin/" target="_blank" class="button is-light">
                <i class="icon-facebook"></i>
              </a>

              <a href="https://twitter.com/executetowin" target="_blank" class="button is-light">
                <i class="icon-twitter"></i>
              </a>
            </div>
          </div>
          <div class="column">
            <h6 class="title is-6">PRODUCTS &amp; SERVICES</h6>

            <router-link :to="{ name: 'services' }" tag="p">
              <a>Professional Services</a>
            </router-link>

            <router-link :to="{ name: 'software' }" tag="p">
              <a>Align Software</a>
            </router-link>

          </div>
          <div class="column">
            <h6 class="title is-6">ABOUT</h6>

            <router-link :to="{ name: 'about' }" tag="p">
              <a>About ETW</a>
            </router-link>

            <router-link :to="{ name: 'contact' }" tag="p">
              <a>Contact</a>
            </router-link>

            <router-link :to="{ name: 'privacy' }" tag="p">
              <a>Privacy Policy</a>
            </router-link>

          </div>
          <div class="column">
            <h6 class="title is-6">RESOURCES</h6>

            <p>
              <a href="https://blog.etw.com">
                Blog
              </a>
            </p>

            <router-link :to="{ name: 'events' }" tag="p">
              <a>Events</a>
            </router-link>

            <router-link :to="{ name: 'customerSuccess' }" tag="p">
              <a>Customer Success</a>
            </router-link>

            <router-link :to="{ name: 'knowledgeCenter' }" tag="p">
              <a>Knowledge Center</a>
            </router-link>

          </div>
          <div class="column">
            <a href="https://itunes.apple.com/us/app/etw-mobile/id1252717437?mt=8" target="_blank"><img src="@/assets/images/mobile/app-store.png" alt="App Store" class="store-button"></a>
            <br>
            <a href="https://play.google.com/store/apps/details?id=com.etw.android&hl=en" target="_blank"><img src="@/assets/images/mobile/google-play.png" alt="Google Play" class="store-button"></a>
          </div>
        </div>
      </div>
    </div>

    <section class="section p-y-1 bg-grey-dark">
      <div class="columns">
        <div class="column has-text-centered has-text-grey">
          <small class="has-text-white">
            <img src="@/assets/images/brand/brand.svg" class="image is-24x24 brand-image m-r-_5"  alt="ETW : Execute To Win">
            Improving the way the world does business
            <span class="has-text-grey-light m-x-1">|</span>
            {{ new Date().getFullYear() }} ETW&reg;
          </small>
        </div>
      </div>
    </section>

  </footer>
</template>
