import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    userId: null,
    profilePicture:'',
    


  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload.userName;
    },
    setUserId(state, payload) {
      state.userId = payload.userId;
    },
    setProfilePicture(state, payload) {
      state.profilePicture = payload.profilePicture;
    }
  },
  actions: {
    setUserId(context, payload) {
      context.commit('setUserId', payload)
    },

    setUserName(context, payload) {
      context.commit('setUserName', payload)
    },
    setProfilePicture(context, payload) {
      context.commit('setProfilePicture', payload)
    },
  },
  getters: {
    userName(state) {
      return state.userName;
    },
    userId(state) {
      return state.userId;
    },
    profilePicture(state){
      return state.profilePicture
    }
  },
  modules: {
  }
})
