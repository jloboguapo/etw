<template>
  <div class="modal" v-bind:class="{'is-active': isActive}">
  <div class="modal-background" @click="toggleModal()"></div>
  <div class="modal-card animated fadeIn">

    <header class="modal-card-head">
      <p class="modal-card-title">{{ modalTitle }}</p>
      <button class="delete" aria-label="close" @click="toggleModal()"></button>
    </header>

    <section class="modal-card-body bg-white-ter">
      <div v-bind:id="modalId">
        <!-- placeholder -->
      </div>
    </section>

    <footer class="modal-card-foot p-a-_5">
      <!-- placeholder -->
    </footer>

  </div>
</div>
</template>

<script>
/*
  |--------------------------------------------------------------------------
  | Hubspot Contact Form Modal.
  |--------------------------------------------------------------------------
  |
  | Had to do some jquery and css overwrites to get this to work.
  | If you create a new form just make sure the javascript is correct.
  | Refer to the /.html file for an example
  |
  */

export default {

  props: {

    /**
       * Is the modal visible
       * @type {Object}
       */
    isActive: {
      default: false,
      type: Boolean
    },

    /**
       * Target for the form
       * @type {Object}
       */
    modalId: {
      default: 'hubspot-form',
      type: String
    },

    /**
       * The text at the top of the modal
       * @type {Object}
       */
    modalTitle: {
      default: 'Contact Us',
      type: String
    },

    /**
       * Something important to Hubspot
       * @type {Object}
       */
    portalId: {
      default: '3379879',
      type: String
    },

    /**
       * Something important to Hubspot
       * @type {Object}
       */
    formId: {
      default: 'd6a266a7-9192-4b1b-b9dd-8aadd78dff3f',
      type: String
    }
  },

  mounted () {
    this.addHubspotForm()
  },

  methods: {

    /**
       * Toggle the modal view
       * @return {none}
       */
    toggleModal () {
      this.$emit('toggleModal')
    },

    addHubspotForm () {
      hbspt.forms.create({
        css: '',
        portalId: this.portalId,
        formId: this.formId,
        target: `#${this.modalId}`,
        errorMessageClass: 'error-message',
        submitButtonClass: 'button is-medium is-rounded is-primary',
        onFormReady ($form) {
          // remove all .input classes
          let inputs = $form.find('.input')
          inputs.removeClass('input')

          // select inputs
          $('select').parent('div').addClass('select is-fullwidth')

          // textareas
          $('textarea').addClass('textarea')

          // recaptcha
          $('.hs_recaptcha').addClass('m-y-1')
        }
      })
    }

  }

}

</script>
