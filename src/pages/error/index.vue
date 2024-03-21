<template>
  <div class="page-error">
    <div class="content">
      <img v-if="type === 'full'" class="error-info" src="@/static/img/tips-full.png" alt="tips">
      <img v-if="type === 'finished'" class="error-info" src="@/static/img/tips-finished.png" alt="tips">

      <!-- 合作者 -->
      <div class="cooperator" v-if="initConfig.top_logo && initConfig.top_logo.url"
           :style="{
            width: initConfig.top_logo.width + 'px',
            height: initConfig.top_logo.height + 'px'
        }">
        <img
          :src="initConfig.top_logo.url"
          alt="top_logo"
          mode="aspectFit"
          :style="{width: initConfig.top_logo.width + 'px', height: initConfig.top_logo.height + 'px'}"
        >
      </div>
    </div>
  </div>
</template>
<script>
import {useBaseStore} from "../../store/base";

export default {
  data() {
    return {
      type: ""
    }
  },
  computed: {
    initConfig() {
      return useBaseStore().getterInitConfig
    }
  },
  onLoad(options) {
    this.type = options.type
  },
  mounted() {}
}
</script>
<style scoped lang="scss">
.page-error {
  width: 100vw;
  height: 100vh;

  .content {
    width: 100vw;
    height: 100vh;
    background: url("https://static.thefair.net.cn/activity/gnsms/img/bg-error.png") center top no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
    color: white;

    .error-info {
      width: 165px;
      height: 151px;
      position: absolute;
      bottom: 47px;
    }

    .cooperator {
      margin-top: 13%;
      width: 100%;
      color: white;
      font-family: Alibaba PuHuiTi Bold;
      font-weight: 700;
      font-size: 14px;
      line-height: 28px;
      text-shadow: 0 0 2px white;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: contain;
        object-position: center center;
      }
    }
  }
}

</style>
