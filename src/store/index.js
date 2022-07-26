import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'zhangsan'
  },
  getters: {
    newName(state) {
      return state.username + "!!!!!"
    }
  },
  mutations: {
    updateName(state) {
      state.username = "lisi"
    }
  },
  actions: {
    updateNameSync(context) {
      setTimeout(()=> {
        context.commit('updateName')
      }, 1000)
    }
  },
  modules: {
  }
})
