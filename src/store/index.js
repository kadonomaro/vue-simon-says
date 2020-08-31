import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		game: {
			round: 5,
			difficulty: 'easy',
			status: 'wait' //wait, start, finish
		}
  },
	mutations: {
		SET_GAME_DIFFICULTY(state, difficulty) {
			state.game.difficulty = difficulty;
		},

		SET_GAME_STATUS(state, status) {
			state.game.status = status;
		}
  },
	actions: {
		changeGameDifficulty({ commit }, difficulty) {
			commit('SET_GAME_DIFFICULTY', difficulty);
		},

		changeGameStatus({ commit }, status) {
			commit('SET_GAME_STATUS', status);
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
		}
	}
})
