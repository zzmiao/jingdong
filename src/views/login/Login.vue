<template>
  <div class="wrapper">
    <div class="login">
      <img class="login__icon" src="@/assets/images/login/login_people.png" />
      <input class="login__input" v-model="data.username" placeholder="请输入用户名" type="text" />
      <input class="login__input" v-model="data.password" placeholder="请输入密码" type="password" />
      <div class="login__button" v-on:click="handleLogin">登陆</div>
      <div class="login__tips">
        <span class="login__tips__text" v-on:click="handleRegisterClick">立即注册</span>|<span
          class="login__tips__text">忘记密码</span>
      </div>
    </div>
    <Toast v-show="data.isShowToast" v-bind:toastMessage="data.toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import { reactive } from 'vue'
import Toast from '../../components/Toast.vue'

export default {
  name: 'Login',
  components: {
    Toast
  },
  setup (props, context) {
    const router = useRouter()
    const data = reactive({
      username: '',
      password: '',
      isShowToast: false,
      toastMessage: ''
    })
    const showToast = (message) => {
      data.toastMessage = message
      data.isShowToast = true
      setTimeout(() => {
        data.toastMessage = ''
        data.isShowToast = false
      }, 3000)
    }
    // 触发登陆事件
    const handleLogin = async () => {
      try {
        const result = await post('api/user/login', {
          username: data.username,
          password: data.password
        })
        if (result.errno === 0) {
          localStorage.setItem('isLogin', true)
          router.push({ name: 'Home' })
        } else {
          console.log('登陆失败')
          showToast('登陆失败')
        }
      } catch (e) {
        // TODO handle the exception
        console.log('请求失败')
        showToast('请求失败')
      }
    }
    // 没有账号去注册
    const handleRegisterClick = () => {
      router.push({
        name: 'Register'
      })
    }
    return {
      handleLogin,
      handleRegisterClick,
      data
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

  .login {

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
