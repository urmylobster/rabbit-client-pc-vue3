<template>
  <div>
    app
    <p>{{$store.state.username}}</p>
    <p>{{$store.getters.newName}}</p>
    <p>{{$store.getters['newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup() {
    const store = useStore()
    console.log(store.state.usermame)
    console.log(store.getters.newName)

    const mutationsFn = () => {
      store.dispatch('updateNameSync')
    }

    return {
      mutationsFn
    }
  }
}
</script>
