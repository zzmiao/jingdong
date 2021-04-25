<template>
  <div class="nearby">
    <div class="nearby__title">附近商家</div>
    <div class="nearby__content">内容</div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  .nearby {
    padding: 0.16rem 0.16rem;

    &__title {
      font-size: 0.18rem;
      color: #333333;
      font-weight: 500;
      margin-bottom: 0.16rem;
    }

    &__content {
      border: 0.01rem solid red;
      height: 3rem;
    }
  }
</style>
