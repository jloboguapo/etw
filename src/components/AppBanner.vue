<template>
	<div class="p-t-_5 has-text-centered">
		<a href="https://etw.splashthat.com/" target="blank">
			<img 
				src="@/assets/images/events/etw-leaderboard-ad3.jpg"
                alt="Join us for the Capable Leadership Webinar">
        </a>

        <div class="modal" v-bind:class="{ 'is-active': isActive }">
  			<div class="modal-background" v-on:click="closeModal"></div>
  				<div class="modal-content">
    			<!-- Any other Bulma elements you want -->
    			<a href="https://etw.splashthat.com/" target="blank">
    				<img src="@/assets/images/events/Leadership_pop.png">
    			</a>
  				</div>
 				 <button class="modal-close is-large" v-on:click="closeModal" aria-label="close"></button>
			</div>

		</div>


</template>



<script type="text/javascript">
	export default {

		data () {
			return{
				isActive: false
			}
		}, 

		created () {
			setTimeout(function() {
				this.isActive = true
			}.bind(this), 3000);
		}, 

		methods: {
			closeModal() {
				this.isActive = false
			}
		}
	}



</script>