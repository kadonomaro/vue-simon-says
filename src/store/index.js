import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		game: {
			round: 1,
			difficulty: 'easy',
			status: 'wait', //wait, start, finish,
			max: null
		}
  },
	mutations: {
		SET_GAME_DIFFICULTY(state, difficulty) {
			state.game.difficulty = difficulty;
		},

		SET_GAME_STATUS(state, status) {
			state.game.status = status;
		},

		CHANGE_GAME_ROUND(state, round) {
			state.game.round = round;
		},

		CHANGE_GAME_MAX_ROUND(state, round) {
			state.game.max = round;
		}
  },
	actions: {
		changeGameDifficulty({ commit }, difficulty) {
			commit('SET_GAME_DIFFICULTY', difficulty);
		},

		changeGameStatus({ commit }, status) {
			if (status === 'finish') {
				commit('CHANGE_GAME_MAX_ROUND', this.state.game.round);
			}
			commit('SET_GAME_STATUS', status);
		},

		changeGameRound({ commit }, round) {
			commit('CHANGE_GAME_ROUND', round);
		}
	},
	getters: {
		getRound(state) {
			return state.game.round;
		},
		getDifficulty(state) {
			switch (state.game.difficulty) {
				case 'easy':
					return 1400;
				case 'medium':
					return 1000;
				case 'hard':
					return 400;
				default:
					break;
			}
		},
		getStatus(state) {
			return state.game.status;
		},
		getMaxRound(state) {
			return state.game.max;
		}
	}
})
