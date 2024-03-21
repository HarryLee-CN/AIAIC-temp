<template>
  <div class="page-index">
    <!-- loading -->
    <loading v-if="isShowLoading" @touchmove.prevent/>
    <!-- 遮罩 -->
    <div class="cover" v-show="isShowCover" @touchmove.prevent>
      <div class="pre-download-font">Alibaba PuHuiTi Bold</div>
      <!-- lottie动画 -->
      <div id="lottie_box"></div>
      <!-- 合作者 -->
      <div class="cooperator" v-if="initConfig.top_logo && initConfig.top_logo.url">
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
      <div class="btn-container">
        <img class="btn" src="@/static/img/btn-start.png" alt="btn" @click="handleStartClick">
      </div>
    </div>
    <!-- 首页 -->
    <div class="content" v-if="btnClicked">
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
      <div class="slogan">
        <img src="@/static/img/slogan.png" alt="slogan">
      </div>
      <div class="tips1">
        <template v-if="initConfig.source_display_name && initConfig.source_title">
          这是新世相和微博联合发起、<span class="pink">{{ initConfig.source_display_name }}</span>作为{{initConfig.source_title}}的
          <span class="pink">#晚安短信计划#</span>
          <br>
          我们准备了<span class="pink">100万</span>个名额
          <br>
          留下你的手机号，报名成功后
          <br>
          <span class="pink">12月25日起，每晚10:00</span>
          <br>
          你都会收到一条晚安短信
        </template>
        <img v-else src="@/static/img/tips1.png" alt="tips1">
      </div>
      <div class="form-register-container">
        <FormRegister :query="query"/>
      </div>
      <div class="tip2">
        <img src="@/static/img/tips2.png" alt="tips2">
      </div>
    </div>
  </div>
</template>

<script>
import {animateCSS} from "../../utils/common";
import FormRegister from "../../components/FormRegister.vue";
import lottie from "lottie-web";
import {useBaseStore} from "../../store/base";
import Loading from "../../components/Loading.vue";

export default {
  components: {Loading, FormRegister},
  data() {
    return {
      isShowLoading: true,
      btnClicked: false,
      isShowCover: false,
      query: {},
    }
  },
  computed: {
    initConfig() {
      return useBaseStore().getterInitConfig
    }
  },
  methods: {
    handleStartClick() {
      this.btnClicked = true
      animateCSS('.cover', 'fadeOut').then((message) => {
        console.log(message)
        this.isShowCover = false
      })
    },
    preloadImg(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          resolve();
        }
        img.error = () => {
          reject();
        }
      })
    },
    async preload() {
      const imgPromises = [];
      // 预加载动效图片
      for (let i = 0; i < 135; i++) {
        imgPromises.push(this.preloadImg(`https://static.thefair.net.cn/activity/gnsms/images/img_${i}.png`))
      }
      // 预加载大尺寸图片
      const urls = [
        'https://static.thefair.net.cn/activity/gnsms/img/bg-error.png',
        'https://static.thefair.net.cn/activity/gnsms/img/bg.png',
        'https://static.thefair.net.cn/activity/gnsms/img/poster.png',
        'https://static.thefair.net.cn/activity/gnsms/img/cover.png',
      ]
      for (let i = 0; i < urls.length; i++) {
        imgPromises.push(this.preloadImg(urls[i]))
      }
      try {
        await Promise.all(imgPromises);
      } catch (e) {
        console.error("预加载出错")
      }
    }
  },
  mounted() {
    this.preload().then(() => {
      this.isShowLoading = false
      this.isShowCover = true
      this.lottie = lottie.loadAnimation({
        container: document.getElementById('lottie_box'),
        renderer: 'svg',
        loop: true,
        path: 'https://static.thefair.net.cn/activity/gnsms/lottie.json'
      })
      this.lottie.play()
    })
  },
  onLoad(query) {
    this.query = query
  }
}
</script>

<style scoped lang="scss">
.page-index {
  width: 100vw;
  height: 100vh;

  .cover {
    width: 100vw;
    height: 100vh;
    background: url("https://static.thefair.net.cn/activity/gnsms/img/cover.png") center top no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    .pre-download-font {
      position: absolute;
      color: transparent;
      font-family: Alibaba PuHuiTi Bold;
    }

    #lottie_box {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .cooperator {
      display: flex;
      justify-content: center;
      margin-top: 12.8vw;

      img {
        object-fit: contain;
        object-position: center center;
      }
    }

    .btn-container {
      width: 100%;
      position: fixed;
      bottom: 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 258px;
        height: 48px;
        transform-origin: center center;
        transition: all 100ms ease-in-out;

        &:active {
          transform: scale(95%, 95%);
        }
      }
    }
  }

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
      margin-top: 30px;

      img {
        width: 132px;
        height: 142px;
      }
    }

    .slogan {
      margin-top: 39px;

      img {
        width: 219.5px;
        height: 33px;
      }
    }

    .tips1 {
      width: 335px;
      margin-top: 33px;

      font-family: Alibaba PuHuiTi Regular;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      color: white;

      img {
        width: 278.5px;
        height: 125.5px;
      }

      .pink {
        color: rgba(255, 133, 165, 1)
      }
    }

    .form-register-container {
      margin-top: 20px;
    }

    .tip2 {
      margin-top: 20px;

      img {
        width: 348px;
        height: 130px;
      }
    }
  }
}
</style>
