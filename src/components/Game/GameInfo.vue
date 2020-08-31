<template>
	<div class="game-info">
		<span class="game-info__title">Раунд: {{ getRound }}</span>
		<button class="game-info__button">Старт</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'GameInfo',
	computed: {
		...mapGetters([
			'getRound'
		])
	}
}
</script>

<style lang="scss">
	.game-info {
		padding: 20px 0;
		&__title {
			display: block;
			font-size: 24px;
			font-weight: bold;
			margin: 0 0 10px;
		}
		&__button {
			padding: 6px 12px;
			font-size: inherit;
			background-color: #6dabE8;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			transition: background-color 0.1s ease-in;
			&:hover {
				background-color: darken(#6dabE8, 5%);
			}
		}
	}
</style>
