<template>
  <!-- content-start -->
  <div class="wrapper">
    <!-- 地址定位-start -->
    <Position />
    <!-- 地址定位-end -->
    <!-- search-start -->
    <Search />
    <!-- search-end -->
    <!-- banner-start -->
    <Banner />
    <!-- banner-end -->
    <!-- menu-start -->
    <Menu />
    <!-- menu-end -->
    <div class="gap"></div>
    <!-- 附近商家-start -->
    <Nearby />
    <!-- 附近商家-end -->
  </div>
  <!-- content-end -->
  <!-- 菜单-start -->
  <Tab-banner />
  <!-- 菜单-end -->
</template>
<script>
import Position from './Position.vue'
import Search from './Search.vue'
import Banner from './Banner.vue'
import Menu from './Menu.vue'
import TabBanner from './TabBanner.vue'
import Nearby from './Nearby.vue'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Position,
    Search,
    Banner,
    Menu,
    TabBanner,
    Nearby
  }
}
</script>

<style lang="scss" scoped="scoped">
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.61rem;
    overflow-y: auto;
  }

  .gap {
    height: 0.1rem;
    background-color: #f1f1f1;
  }
</style>
