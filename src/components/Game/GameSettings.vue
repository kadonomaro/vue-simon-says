<template>
	<div class="game-settings">
		<span class="game-settings__title">Настройки</span>
		<span class="game-settings__field-caption">Сложность:</span>
		<select class="game-settings__field" v-model="game.difficulty" @change="changeHandler">
			<option value="easy">Легкий</option>
			<option value="medium">Средний</option>
			<option value="hard">Сложный</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'GameSettings',
	data() {
		return {
			game: {
				difficulty: 'easy'
			}
		}
	},
	methods: {
		changeHandler() {
			this.$store.dispatch('changeGameDifficulty', this.game.difficulty);
		}
	}
}
</script>

<style lang="scss">
	.game-settings {
		padding: 20px 0;
		&__title {
			display: block;
			font-size: 24px;
			font-weight: bold;
			margin: 0 0 10px;
		}
		&__field-caption {
			display: block;
			margin-bottom: 5px;
			font-size: 14px;
		}
		&__field {
			padding: 4px 8px;
			border: 2px solid #6dabE8;
		}
	}
</style>
