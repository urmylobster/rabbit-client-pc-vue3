<template>
  <!-- 1.顶部通栏布局  -->
  <AppTopnav />
   <!-- 2.1 普通头部布局-->
  <AppHeader />
  <!-- 2.2 固定头部布局-->
  <AppHeaderSticky />
  <!-- <header>公共头部</header> -->
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    // 获取下分类数据
    const store = useStore()
    store.dispatch('category/getList')
  }
}

</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
