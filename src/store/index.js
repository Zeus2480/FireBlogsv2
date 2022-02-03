import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    userId: null
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload.userName;
    },
    setUserId(state, payload) {
      state.userId = payload.userId;
    }
  },
  actions: {
    setUserId(context, payload) {
      context.commit('setUserId', payload)
    },

    setUserName(context, payload) {
      context.commit('setUserName', payload)
    },
  },
  getters: {
    userName(state) {
      return state.userName;
    },
    userId(state) {
      return state.userId;
    },
  },
  modules: {
  }
})
