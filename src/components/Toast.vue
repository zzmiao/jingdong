<template>
  <div class="toast">{{toastMessage}}</div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    toastMessage: {
      type: String,
      default: '操作失败'
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.35);
    padding: 0.1rem;
    border-radius: 0.05rem;
    color: #fff;
    z-index: 100;
  }
</style>
