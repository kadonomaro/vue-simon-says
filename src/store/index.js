import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		game: {
			difficulty: 'easy'
		}
  },
	mutations: {
		SET_GAME_DIFFICULTY(state, difficulty) {
			state.game.difficulty = difficulty;
		}
  },
	actions: {
		changeGameDifficulty({ commit }, difficulty) {
			commit('SET_GAME_DIFFICULTY', difficulty);
		}
  }
})
