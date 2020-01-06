import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add (state, data) {
      state.count += data
    }
  },
  actions: {
    asyncAdd (store) {
      setTimeout(() => {
        // store.commit('add')
        store.commit('add', 2)
      }, 1000)
    }
  },
  modules: {
  }
})
