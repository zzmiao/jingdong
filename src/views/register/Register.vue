<template>
  <div class="wrapper">
    <div class="register">
      <img class="register__icon" src="@/assets/images/login/login_people.png" />
      <input class="register__input" placeholder="请输入手机号" type="text" />
      <input class="register__input" placeholder="请输入密码" type="password" />
      <div class="register__button" v-on:click="handleRegister">注册</div>
      <div class="register__tips">
        <span class="register__tips__text" v-on:click="handleLoginClick">已有帐号去登陆</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  useRouter
} from 'vue-router'

export default {
  name: 'Register',
  components: {

  },
  setup () {
    const router = useRouter()
    // 已有账号去登陆
    const handleLoginClick = () => {
      router.push({
        name: 'Login'
      })
    }
    return {
      handleLoginClick
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  .register {

    &__icon {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      margin: auto;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    &__input {
      border: 0.01rem solid #dcdcdc;
      border-radius: 0.04rem;
      display: block;
      width: 2.48rem;
      height: 0.4rem;
      margin: auto;
      outline: none;
      font-size: 0.16rem;
      color: #333333;
      padding: 0 0.16rem;
      margin-bottom: 0.16rem;
      background-color: #f7f7f7;
    }

    &__button {
      border: 0.01rem solid #00a2ef;
      border-radius: 0.04rem;
      width: 2.8rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin: auto;
      margin-top: 0.32rem;
      background-color: #00a2ef;
      font-size: 0.16rem;
      color: #fff;
      text-align: center;
    }

    &__button.disabled {
      border: 1px solid #DDD;
      background-color: #F5F5F5;
      color: #ACA899;
    }

    &__tips {
      width: 2.82rem;
      margin: 0.16rem auto;
      text-align: center;
      color: #999;
      font-size: 0.14rem;

      &__text {
        padding: 0 0.16rem;
      }
    }
  }
</style>
