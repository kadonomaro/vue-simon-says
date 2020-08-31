<template>
	<div class="game-panel">
		<div class="game-panel__board">
			<button
				class="game-panel__button"
				style="background-color: #1e90ff;"
				ref="blue"
				@click="playSound(sounds['blue'])"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #ff5643;"
				ref="red"
				@click="playSound(sounds['red'])"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #feef33;"
				ref="yellow"
				@click="playSound(sounds['yellow'])"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #bede15;"
				ref="green"
				@click="playSound(sounds['green'])"
			></button>
		</div>
	</div>
</template>

<script>
import blueSound from '@/assets/sounds/blue.mp3';
import redSound from '@/assets/sounds/red.mp3';
import yellowSound from '@/assets/sounds/yellow.mp3';
import greenSound from '@/assets/sounds/green.mp3';
import { randomRange } from '@/helpers/randomRange';
import { mapGetters } from 'vuex';

export default {
	name: 'GamePanel',
	data() {
		return {
			sounds: {
				'blue': blueSound,
				'red': redSound,
				'yellow': yellowSound,
				'green': greenSound
			},
			queue: []
		}
	},
	mounted() {

	},
	methods: {
		playSound(sound) {
			if (sound) {
				const audio = new Audio(sound);
				audio.play();
			}
		},

		fillQueue() {
			for (let i = 0; i < this.getRound; i++) {
				this.queue.push(Object.keys(this.sounds)[randomRange(0, 3)]);
			}
		},

		playQueue() {
			let counter = 0;
			const interval = setInterval(() => {
				this.playSound(this.sounds[this.queue[counter]]);
				this.highlightButton(this.queue[counter]);
				counter++;

				if (counter >= this.getRound) {
					clearInterval(interval);
				}
			}, this.getDifficulty);
		},

		highlightButton(button) {
			this.$refs[button].classList.add('game-panel__button--active');
			setTimeout(() => {
				this.$refs[button].classList.remove('game-panel__button--active');
			}, this.getDifficulty - 100);
		}
	},
	computed: {
		...mapGetters([
			'getRound',
			'getDifficulty',
			'getStatus'
		])
	},
	watch: {
		getStatus(value) {
			if (value === 'start') {
				this.fillQueue();
				this.playQueue();
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
		}
		&__button {
			width: 50%;
			border: none;
			cursor: pointer;
			outline: none;
			transition: opacity 0.1s ease-in;
			opacity: 0.5;
			&:active {
				opacity: 1;
			}
		}
		&__button--active {
			opacity: 1;
		}
	}
</style>
