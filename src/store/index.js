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
  // ===> 默认是存储在localStorage中
  // ===> key是存储数据的键名
  // ===> paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如user.token
  // ===> 修改state后触发才可以看到本地存储数据的的变化。
})
