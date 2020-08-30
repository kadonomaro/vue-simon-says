<template>
	<div class="game-panel">
		<div class="game-panel__board">
			<button
				class="game-panel__button"
				style="background-color: #1e90ff;"
				@click="playSound(sounds.blueSound)"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #ff5643;"
				@click="playSound(sounds.redSound)"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #feef33;"
				@click="playSound(sounds.yellowSound)"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #bede15;"
				@click="playSound(sounds.greenSound)"
			></button>
		</div>
	</div>
</template>

<script>
import blueSound from '@/assets/sounds/blue.mp3';
import redSound from '@/assets/sounds/red.mp3';
import yellowSound from '@/assets/sounds/yellow.mp3';
import greenSound from '@/assets/sounds/green.mp3';

export default {
	name: 'GamePanel',
	data() {
		return {
			sounds: {
				blueSound,
				redSound,
				yellowSound,
				greenSound
			}
		}
	},
	methods: {
		playSound(sound) {
			if (sound) {
				const audio = new Audio(sound);
				audio.play();
			}
		}
	}
}
</script>

<style lang="scss">
	.game-panel {
		&__board {
			display: flex;
			flex-wrap: wrap;
			width: 350px;
			height: 350px;
			border-radius: 50%;
			overflow: hidden;
			box-sizing: border-box;
			transition: opacity 0.1s ease-in;
			opacity: 0.5;
		}
		&__button {
			width: 50%;
			border: none;
			cursor: pointer;
			outline: none;
		}
	}
</style>
