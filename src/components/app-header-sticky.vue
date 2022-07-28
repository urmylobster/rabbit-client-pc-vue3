<template>
  <div class="app-header-sticky" :class="{show:isShow}">
    <div class="container" v-show="isShow">
      <router-link class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <router-link to="/" >品牌</router-link>
        <router-link to="/" >专题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from './app-header-nav.vue'
import { ref } from 'vue'
export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav },
  setup() {
    const isShow = ref(false)
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop
      if(scrollTop > 78) {
        isShow.value = true
      } else {
        isShow.value = false
      }
    }
    return { isShow }
  },
}
</script>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
     transition: all 0.3s linear;
     transform: translateY(0);
     opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(~@/assets/images/logo.png) no-repeat  right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
