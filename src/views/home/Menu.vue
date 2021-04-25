<template>
  <ul class="menu">
    <template v-for="(items,index) in menuList" v-bind:key="index">
      <li class="menu__li">
        <img v-bind:src="items.icon" class="menu__li__img" />
        <span class="menu__li__name">{{items.name}}</span>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {

    }
  },
  setup () {
    const menuList = [{
      name: '骑行',
      icon: require('@/assets/images/menu/1.png'),
      path: ''
    }, {
      name: '调查问券',
      icon: require('@/assets/images/menu/2.png'),
      path: ''
    }, {
      name: '参与投票',
      icon: require('@/assets/images/menu/3.png'),
      path: ''
    }, {
      name: '农副产品',
      icon: require('@/assets/images/menu/4.png'),
      path: ''
    }, {
      name: '缴电费',
      icon: require('@/assets/images/menu/5.png'),
      path: ''
    }, {
      name: '缴话费',
      icon: require('@/assets/images/menu/6.png'),
      path: ''
    }, {
      name: '缴燃气费',
      icon: require('@/assets/images/menu/7.png'),
      path: ''
    }, {
      name: '缴水费',
      icon: require('@/assets/images/menu/8.png'),
      path: ''
    }, {
      name: '缴违章',
      icon: require('@/assets/images/menu/9.png'),
      path: ''
    }]
    return {
      menuList
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped="scoped">
  .menu {
    display: flex;
    flex-wrap: wrap;

    &__li {
      width: 20%;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 0.16rem;

      &__img {
        display: block;
        margin: auto;
        width: 0.5rem;
        height: 0.5rem;
      }

      &__name {
        font-size: 0.16rem;
        color: #333333;
        margin-top: 0.05rem;
      }
    }
  }
</style>
