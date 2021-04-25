<template>
  <div class="search">
    <i class="iconfont">&#xe600;</i>
    <input type="text" class="search__input" placeholder="请输入关键字" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped="scoped">
  .search {
    line-height: 0.32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: 0.14rem;
    margin: 0 0.2rem;
    display: flex;
    flex-direction: row;
    overflow: hidden;

    .iconfont {
      font-size: 0.2rem;
      margin-left: 0.08rem;
    }

    &__input {
      border: 0;
      outline: none;
      display: block;
      flex: 1;
      background-color: #f5f5f5;
      padding: 0 0.2rem 0 0.06rem;
    }

    &__input:focus {
      outline: none;
    }
  }
</style>
