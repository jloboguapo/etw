/*
|--------------------------------------------------------------------------
| ETW Goals and Notes.
|--------------------------------------------------------------------------
|
|
*/

export default {

  name: 'Notes',

  mounted () {
    this.scrollReveal.reveal('.sr-goal-card', {
      duration: 1000,
      origin: 'bottom',
      distance: '300px',
      scale: 1,
      opacity: 1,
      reset: false
    })

    this.scrollReveal.reveal('.sr-note-2', {
      delay: 1000,
      reset: false
    })

    this.scrollReveal.reveal('.sr-note-1', {
      delay: 1500,
      afterReveal: (domEl) => {
        domEl.classList.add('animated')
        domEl.classList.add('shake')
      },
      reset: false
    })
  }

}
