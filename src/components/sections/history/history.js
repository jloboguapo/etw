/*
|--------------------------------------------------------------------------
| History section.
|--------------------------------------------------------------------------
|
| The history of ETW.
|
*/

export default {

  name: 'sectionHistory',

  mounted(){
    this.scrollReveal.reveal('.sr-history-image', {
      duration: 1000,
      distance: '100px',
      scale: 1
    })
  }

}
