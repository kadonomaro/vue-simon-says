<template>
  <div class="game">
		<h1 class="game__title">Simon Says</h1>
  </div>
</template>

<script>
export default {
  name: 'GameComponent'
}
</script>

<style lang="scss">
	.game {
		max-width: 800px;
		margin: 0 auto;
		&__title {
			margin: 0 0 50px;
			text-align: center;
		}
	}
</style>
