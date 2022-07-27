<template>
  <nav>公共顶栏</nav>
  <header>公共头部</header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>公共底部</footer>
</template>

<script>
export default {
  name: 'xtx-layout'
}

</script>
