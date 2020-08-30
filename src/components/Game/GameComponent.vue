<template>
  <div class="game">
		<h1 class="game__title">Simon Says</h1>
		<div class="game__inner">
			<div class="game__main">
				<game-panel />
			</div>
			<div class="game__side">
				<game-info />
				<game-settings />
			</div>
		</div>
  </div>
</template>

<script>
import GamePanel from './GamePanel';
import GameInfo from './GameInfo';
import GameSettings from './GameSettings';

export default {
	name: 'GameComponent',
	components: {
		GamePanel,
		GameInfo,
		GameSettings
	}
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
		&__inner {
			display: flex;
		}
		&__main {
			max-width: 60%;
			flex-basis: 60%;
		}
		&__side {
			max-width: 40%;
			flex-basis: 40%;
		}
	}
</style>
