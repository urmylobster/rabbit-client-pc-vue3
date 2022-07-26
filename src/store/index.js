import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  state: {
    username: 'zhangsan'
  },
  getters: {
    newName (state) {
      return state.username + '!!!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'lisi'
    }
  },
  actions: {
    updateNameSync (context) {
      setTimeout(() => {
        context.commit('updateName')
      }, 1000)
    }
  },
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'rabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
