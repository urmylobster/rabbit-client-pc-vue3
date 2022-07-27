<template>
  <div>
    app
    <p>{{$store.state.username}}</p>
    <p>{{$store.getters.newName}}</p>
    <p>{{$store.getters['newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="mutationsUserFn">mutationsUserFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'HomeView',
  setup () {
    const store = useStore()
    console.log(store.state.usermame)
    console.log(store.getters.newName)

    const mutationsFn = () => {
      store.dispatch('updateNameSync')
    }

    const mutationsUserFn = () => {
      store.commit('user/setUser', { account: 'su' })
    }

    return {
      mutationsFn,
      mutationsUserFn
    }
  }
}
</script>
