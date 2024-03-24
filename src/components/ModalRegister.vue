<script>
import {defineComponent} from 'vue'
import {phoneNumValid, timeCountdown} from "../utils/common";
import {activityAigcSendSmsCode, v1UserLogin} from "../api/api";

export default defineComponent({
  name: "ModalRegister",
  props: ["open"],
  data() {
    return {
      mobile: "",
      code: "",
      btnGetCodeText: "获取验证码",
      isLoading: false,
      btnGetCodeDisabled: false,
      encryptedMobile: "",
    }
  },
  computed: {
    btnRegisterDisabled() {
      return !this.mobile || !this.encryptedMobile || !this.code
    }
  },
  methods: {
    async getCode() {
      try {
        if (this.btnGetCodeDisabled) return
        if (this.isLoading) return
        if (!phoneNumValid(this.mobile)) return uni.showToast({icon: "none", title: "请输入正确的手机号"})
        uni.showLoading()
        this.isLoading = true
        const res = await activityAigcSendSmsCode({mobile: this.mobile})
        uni.hideLoading()
        this.isLoading = false
        const {encrypt_mobile, status} = res.data.result
        this.encryptedMobile = encrypt_mobile
        uni.showToast({icon: "none", title: "验证码已发送"})
        this.btnGetCodeDisabled = true
        timeCountdown(60, (time) => {
          this.btnGetCodeText = `已发送（${time}）`;
          if (time === 0) {
            this.btnGetCodeText = "获取验证码";
            this.btnGetCodeDisabled = false;
          }
        });
      } catch (e) {
        console.log(e)
        uni.hideLoading()
        this.isLoading = false
        uni.showToast({icon: "none", title: e.data.message.text})
      }
    },
    async register() {
      try {
        if (this.btnRegisterDisabled) return
        if (this.isLoading) return
        uni.showLoading()
        this.isLoading = true
        const res = await v1UserLogin({encrypt_mobile: this.encryptedMobile, sms_code: this.code})
        uni.hideLoading()
        this.isLoading = false
        console.log(res.data.result)
        // "user": {
        //   "status": "online",
        //     "uid": "485373384205240306",
        //     "nick": "NAME17112690859155",
        //     "balance": "￥0",
        //     "avatar": "http:\/\/image.bj.taooo.cc\/public\/user\/avatar\/default_avatar_v1.png?x-oss-process=image\/auto-orient,1\/resize,w_750\/format,jpg\/interlace,1\/quality,q_80",
        //     "sex": "unknown",
        //     "desc": "",
        //     "hashid": "X1w_6VGBmel"
        // }
        this.$emit("registered")
      } catch (e) {
        console.log(e)
        uni.hideLoading()
        this.isLoading = false
        uni.showToast({icon: "none", title: e.data.message.text})
      }
    }
  }
})
</script>

<template>
  <div class="register" v-if="open">
    <div class="content">
      <div class="input-container">
        <input class="phone-input" type="tel" placeholder="请输入手机号" placeholder-style="color: #C9C9C9"
               v-model="mobile">
      </div>
      <div class="code-container">
        <input class="code-input" type="number" placeholder="请输入验证码" placeholder-style="color: #C9C9C9"
               v-model="code">
        <div class="btn-get-code" :class="{disabled: btnGetCodeDisabled}" @click="getCode">{{ btnGetCodeText }}</div>
      </div>
      <div class="btn-register" :class="{disabled: btnRegisterDisabled}" @click="register">登录</div>
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

  background-color: rgba(0, 0, 0, 0.67);

  .content {
    width: 328.45px;
    height: 214px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 27.5px;

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

      .disabled {
        background-color: #E8E8E8;
        color: #5F5F5F;
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

    .disabled {
      background-color: #E8E8E8;
      color: #5F5F5F;
    }
  }

  .close {
    width: 30px;
    height: 30px;
    margin-top: 76px;
  }
}
</style>
