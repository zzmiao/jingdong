<template>
  <div class="tabBar">
    <template v-for="(items,index) in tabList" v-bind:key="index">
      <div v-bind:class="{'tabBar__item':true, 'tabBar__item--active':index===currentIndex}">
        <i class="iconfont" v-html="items.icon"></i>
        <span class="tabBar__item__name">{{items.name}}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TabBanner',
  data () {
    return {
      currentIndex: 0
    }
  },
  setup (props, context) {
    const tabList = [{
      icon: '&#xe71b;',
      path: '',
      name: '首页'
    }, {
      icon: '&#xe60e;',
      path: '',
      name: '订单'
    }, {
      icon: '&#xe603;',
      path: '',
      name: '购物车'
    }, {
      icon: '&#xe60d;',
      path: '',
      name: '我的'
    }]
    return {
      tabList
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped="scoped">
  @import '@/style/viriables.scss';
  @import '@/style/mixins.scss';

  .tabBar {
    border-top: 0.01rem solid #f7f7f7;
    height: 0.6rem;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    z-index: 1;

    &__item {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      color: $cont-fontcolor;
      padding-top: 0.1rem;

      .iconfont {
        font-size: 0.2rem;
      }

      &__name {
        font-size: 0.16rem;
        padding-top: 0.05rem;
      }

      &--active {
        color: #00a2ef;
      }
    }
  }
</style>
