import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    dialog: false,
  },
  getters: {
    getDrawer(state){
      return state.drawer;
    },
    getDialog(state){
      return state.dialog;
    }
  },
  mutations: {
    changeDrawer(s){
      s.drawer = !s.drawer;
    },
    changeDialog(s){
      s.dialog = !s.dialog;
    }
  },
  actions: {
  },
  modules: {
  }
})
