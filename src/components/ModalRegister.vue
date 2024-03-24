<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ModalRegister",
  props: ["open"],
  data() {
    return {
      btnText: "获取验证码"
    }
  }
})
</script>

<template>
<div class="register" v-if="open">
  <div class="content">
    <div class="input-container">
      <input class="phone-input" type="tel" placeholder="请输入手机号" placeholder-style="color: #C9C9C9">
    </div>
    <div class="code-container">
      <input class="code-input" type="number" placeholder="请输入验证码" placeholder-style="color: #C9C9C9">
      <div class="btn-get-code">{{btnText}}</div>
    </div>
    <div class="btn-register">登录</div>
  </div>
  <img class="close" src="../static/img/icon-close.svg" alt="close" @click="$emit('close')">
</div>
</template>

<style scoped lang="scss">
.register {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,0.67);

  .content {
    width: 328.45px;
    height: 214px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 27px;

    .phone-input {
      width: 268.58px;
      height: 42.17px;
      border: 0.5px solid #979797;

      font-family: Source Han Serif CN;
      font-size: 17.25px;
      font-weight: 300;
      line-height: 24.79px;
      text-align: left;

      color: #303030;

      padding: 0 10px;
    }

    .code-container {
      margin-top: 14.83px;
      display: flex;

      .code-input {
        width: 140.93px;
        height: 42.17px;
        border: 0.5px solid #979797;

        font-family: Source Han Serif CN;
        font-size: 17.25px;
        font-weight: 300;
        line-height: 24.79px;
        text-align: left;

        color: #303030;

        padding: 0 10px;
      }

      .btn-get-code {
        width: 117.71px;
        height: 42.17px;
        background: #303030;
        margin-left: 10.35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Source Han Serif CN;
        font-size: 17.25px;
        font-weight: 300;
        line-height: 24.79px;
        text-align: left;

        color: #C9C9C9
      }
    }

    .btn-register {
      width: 268.58px;
      height: 42.17px;

      background: #303030;
      margin-top: 21.83px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: Source Han Serif CN;
      font-size: 17.25px;
      font-weight: 300;
      line-height: 24.79px;
      text-align: left;

      color: #C9C9C9
    }
  }

  .close {
    width: 30px;
    height: 30px;
    margin-top: 76px;
  }
}
</style>
