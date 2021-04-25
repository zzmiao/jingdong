<template>
  <div class="banner">
    <img src="@/assets/images/banner.jpg" class="banner__img" />
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped="scoped">
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 25.6%;
    margin: 0.16rem 0.16rem;

    &__img {
      width: 100%;
    }
  }
</style>
