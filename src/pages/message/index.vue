<template>
  <div class="page-message">
    <div class="content">
      <!-- logos -->
      <div class="logos">
        <img class="logo-thefair" src="@/static/img/logo-thefair.png" alt="logo">
        <img class="logo-weibo" src="@/static/img/logo-weibo.png" alt="logo">
      </div>
      <!-- 合作者 -->
      <div
        class="cooperator"
        v-if="initConfig.top_logo && initConfig.top_logo.url"
        :style="{
            width: initConfig.top_logo.width + 'px',
            height: initConfig.top_logo.height + 'px'
        }"
      >
        <img
          :src="initConfig.top_logo.url"
          alt="top_logo"
          mode="aspectFit"
          :style="{
            width: initConfig.top_logo.width + 'px',
            height: initConfig.top_logo.height + 'px'
          }"
        >
      </div>
      <div class="brand">
        <img src="@/static/img/logo-goodnight-message-2023.png" alt="brand">
      </div>
      <!-- message -->
      <div class="message-container">
        <!-- 介绍&举例 -->
        <div class="examples">
          <p class="introduce">
            你可以与陌生人交换晚安。
            <br>
            今年的主题是<span>「接纳和理解」</span>，按格式写下你的短信，限70字符内，超过会无法发送。
          </p>
          <p class="format">
            格式：“我是来自XX的XX，今年我虽然没完成某件事，但这样的我也很好。晚安。”
          </p>
          <p class="ep">
            例1：你好，我是北京的小胖。我今年虽然没减肥成功，但我能吃三碗米饭。比起成功的人，做个好胃口的人也很好。晚安。
          </p>
          <p class="ep">
            例2：你好，我是安徽的文文。在北京找了三个月的工作却一无所获，逃回老家，发现屋檐下的燕子也回来了。做个跟燕子一样恋家的人也很好。晚安。
          </p>
        </div>
        <!-- 输入框 -->
        <div class="textarea-container">
          <div class="title">你的短信内容</div>
          <div class="textarea-box">
            <textarea
              placeholder="限70字符内"
              v-model="message"
              maxlength="70"
              placeholder-class="textarea-placeholder"
            />
            <div class="limit">{{ message.length }}/70</div>
          </div>
        </div>
        <div class="nickname-container">
          <div class="title">你的昵称</div>
          <div class="input-container">
            <input type="text" placeholder="不超过五个字" v-model="nickname" maxlength="5">
          </div>
        </div>
      </div>
    </div>
    <!-- btn -->
    <div class="btn-submit">
      <img v-if="btnSubmitDisabled" class="disabled" src="@/static/img/btn-submit-disabled.png" alt="btn">
      <img v-else class="able" src="@/static/img/btn-submit.png" alt="btn" @click="handleSubmit">
    </div>
  </div>
</template>

<script>
import {activityGnsmsCreateSmsUser} from "../../api/api";
import {useBaseStore} from "../../store/base";

export default {
  data() {
    return {
      query: {},
      message: "",
      nickname: "",
      isLoading: false
    }
  },
  computed: {
    registerInfo() {
      return useBaseStore().getterRegisterInfo
    },
    btnSubmitDisabled() {
      return this.message === "" || this.nickname === ""
    },
    initConfig() {
      return useBaseStore().getterInitConfig
    }
  },
  watch: {
    message: {
      handler() {
        if (this.message.length > 70) {
          this.message = this.message.substring(0, 70)
        }
      }
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.nickname || !this.message) return
      if (this.isLoading) return
      try {
        uni.showLoading()
        this.isLoading = true
        await activityGnsmsCreateSmsUser({
          mobile: this.registerInfo.mobile,
          country_code: this.registerInfo.country_code,
          token: this.registerInfo.token,
          province: this.registerInfo.province,
          city: this.registerInfo.city,
          nick: this.nickname,
          content: this.message
        })
        uni.hideLoading()
        this.isLoading = false
        uni.showToast({
          title: "提交成功",
          icon: "none"
        })
        useBaseStore().updateRegisterInfo({
          ...this.registerInfo,
          nick: this.nickname,
          content: this.message
        })
        uni.navigateTo({
          url: "/pages/poster/index?__s=" + (this.query.__s || ""),
        });
      } catch (e) {
        uni.hideLoading()
        this.isLoading = false
        uni.showToast({
          title: e.data.message.text || `网络错误，请稍后重试(${e.errMsg})`,
          icon: "none"
        })
      }
    }
  },
  onLoad(query) {
    this.query = query
  },
}
</script>

<style scoped lang="scss">
.page-message {
  width: 100vw;
  height: 100vh;

  .content {
    width: 100vw;
    height: 100vh;
    background: url("https://static.thefair.net.cn/activity/gnsms/img/bg.png") center top no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
    padding-bottom: 50px;

    padding-left: 10px;
    padding-right: 10px;

    .logos {
      width: 136.5px;
      height: 20px;
      min-height: 20px;
      margin-top: 14px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo-thefair {
        width: 74px;
        height: 20px;
      }

      .logo-weibo {
        width: 51.5px;
        height: 17.5px;
        margin-left: 11px;
      }
    }

    .cooperator {
      margin-top: 14px;
      display: flex;
      justify-content: center;
      min-height: 33px;

      img {
        object-fit: contain;
        object-position: center center;
      }
    }

    .brand {
      margin-top: 13px;

      img {
        width: 86px;
        height: 91.5px;
      }
    }

    .message-container {
      border-radius: 5px;
      border: 1px rgba(0, 176, 243, 0.2) solid;
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      margin-top: 15px;
      padding: 24px 15px 45px 15px;
      color: white;

      .examples {
        font-family: Alibaba PuHuiTi Regular;
        font-size: 14px;
        line-height: 28px;
        font-weight: 700;

        .introduce {
          span {
            color: rgba(255, 133, 165, 1);
          }
        }

        .format {
          margin-top: 10px;
          color: rgba(202, 253, 246, 1);
        }

        .ep {
          color: rgba(202, 253, 246, 1);
          margin-top: 40px;
          font-weight: 400;
        }
      }

      .textarea-container {
        margin-top: 46px;

        .title {
          font-family: Alibaba PuHuiTi Regular;
          font-weight: 700;
          font-size: 14px;
          line-height: 14px;
        }

        .textarea-box {
          width: 100%;
          margin-top: 10px;
          border: 1px rgba(186, 60, 93, 1) solid;
          border-radius: 5px;
          padding: 10px;

          textarea {
            width: 100%;
            height: 120px;

            font-family: Alibaba PuHuiTi Regular;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;

            .textarea-placeholder {
              color: rgba(255, 255, 255, 0.6);
            }
          }

          .limit {
            font-family: Alibaba PuHuiTi Regular;
            font-weight: 400;
            font-size: 12px;
            line-height: 12px;
            text-align: right;
          }
        }
      }

      .nickname-container {
        margin-top: 50px;

        .title {
          font-family: Alibaba PuHuiTi Regular;
          font-weight: 700;
          font-size: 14px;
          line-height: 14px;
        }

        .input-container {
          border-bottom: 1px rgba(186, 60, 93, 1) solid;
          padding: 10px;
          margin-top: 10px;

          input {
            font-family: Alibaba PuHuiTi Regular;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;

            .input-placeholder {
              color: rgba(255, 255, 255, 0.6);
            }
          }
        }
      }
    }
  }

  .btn-submit {
    position: fixed;
    bottom: 0;

    .disabled {
      width: 100vw;
      object-fit: contain;
      object-position: center center;
    }

    .able {
      width: 100vw;
      object-fit: contain;
      object-position: center center;
      transform-origin: center center;
      transition: all 100ms ease-in-out;

      &:active {
        transform: scale(95%, 95%);
      }
    }
  }
}
</style>
