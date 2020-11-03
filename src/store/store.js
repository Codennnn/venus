import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import user from './modules/user'
import todo from './modules/todo'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    todo,
    auth,
  },

  state,
  getters,
  mutations,
  actions,

  plugins: [
    createPersistedState({
      paths: ['user.info'],
    }),
  ],
})
