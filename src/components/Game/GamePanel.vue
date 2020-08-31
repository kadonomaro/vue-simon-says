<template>
	<div class="game-panel">
		<div class="game-panel__board">
			<button
				class="game-panel__button"
				style="background-color: #1e90ff;"
				ref="blue"
				@click="clickHandler('blue')"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #ff5643;"
				ref="red"
				@click="clickHandler('red')"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #feef33;"
				ref="yellow"
				@click="clickHandler('yellow')"
			></button>
			<button
				class="game-panel__button"
				style="background-color: #bede15;"
				ref="green"
				@click="clickHandler('green')"
			></button>
		</div>
		<div>player: {{ playerQueue }}</div>
		<div>game: {{ gameQueue }}</div>
		<span class="game-panel__message" v-if="getStatus === 'finish'">Вы проиграли после {{ getMaxRound }}</span>
	</div>
</template>

<script>
import blueSound from '@/assets/sounds/blue.mp3';
import redSound from '@/assets/sounds/red.mp3';
import yellowSound from '@/assets/sounds/yellow.mp3';
import greenSound from '@/assets/sounds/green.mp3';
import failSound from '@/assets/sounds/fail.mp3';
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
			failSound,
			gameQueue: [],
			playerQueue: [],
			isEqual: null
		}
	},
	methods: {
		clickHandler(color) {
			if (this.getStatus === 'start') {
				this.playSound(this.sounds[color]);
				this.highlightButton(color);
				this.playerQueue.push(color);
				this.checkDifference();
			}
		},

		startGame() {
			this.clearGame();
			this.fillGameQueue();
			this.playGameQueue();
		},

		clearGame() {
			this.gameQueue.length = 0;
			this.playerQueue.length = 0;
		},

		startNextRound() {
			this.$store.dispatch('changeGameRound', this.getRound + 1);
			setTimeout(() => {
				this.startGame();
			}, 1000);
		},

		finishGame() {
			this.clearGame();
			this.$store.dispatch('changeGameStatus', 'finish');
			this.$store.dispatch('changeGameRound', 1);
			setTimeout(() => {
				this.playSound(this.failSound);
			}, 1000);
		},

		checkDifference() {
			this.isEqual = this.gameQueue.every((value, index) => value === this.playerQueue[index]);

			if(!this.isEqual && (this.gameQueue.length === this.playerQueue.length)) {
				this.finishGame();
			}

			if (this.isEqual) {
				this.startNextRound();
			}
		},

		playSound(sound) {
			if (sound) {
				const audio = new Audio(sound);
				audio.play();
			}
		},

		fillGameQueue() {
			for (let i = 0; i < this.getRound; i++) {
				this.gameQueue.push(Object.keys(this.sounds)[randomRange(0, 3)]);
			}
		},

		playGameQueue() {
			let counter = 0;
			const interval = setInterval(() => {
				this.playSound(this.sounds[this.gameQueue[counter]]);
				this.highlightButton(this.gameQueue[counter]);
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
			'getStatus',
			'getMaxRound'
		])
	},
	watch: {
		getStatus(value) {
			if (value === 'start') {
				this.startGame();
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
			outline: none;
			transition: opacity 0.1s ease-in;
			opacity: 0.5;
			cursor: pointer;
		}
		&__button--active {
			opacity: 1;
		}
	}
</style>
