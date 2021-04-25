<template>
  <div class="position">
    <i class="iconfont iconfont__lf">&#xe69e;</i>
    <div class="position__name">{{position}}</div>
    <i class="iconfont iconfont__rg">&#xe61d;</i>
  </div>
</template>

<script>
import {
  ref
} from 'vue'
export default {
  name: 'Position',
  data () {
    return {

    }
  },
  setup (props, context) {
    const position = ref('江苏省苏州市昆山市经济开发区')
    return {
      position
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped="scoped">
  @import '@/style/viriables.scss';
  @import '@/style/mixins.scss';

  .position {
    padding: 0.16rem 0;
    margin: 0 0.16rem;
    font-size: 0.16rem;
    color: $cont-fontcolor;
    position: relative;

    .iconfont {
      font-size: 0.2rem;
      position: absolute;

      &__lf {
        left: 0;
        top: 0.14rem;
      }

      &__rg {
        right: 0;
        top: 0.14rem;
      }
    }

    &__name {
      margin: 0 0.22rem;
      @include ellipsis
    }
  }
</style>
