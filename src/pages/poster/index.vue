<template>
  <div class="page-poster">
    <div class="content">
      <div class="tips">
        <img v-if="initConfig.source === 'wyyyy'" src="@/static/img/poster-save-tips-by-screenshot.png" alt="tips"/>
        <img v-else src="@/static/img/poster-save-tips.png" alt="tips">
      </div>

      <div class="loading_box">
        <div class="symbol">
          <p>加载中...</p>
          <div></div>
        </div>
      </div>

      <div class="canvas-container">
        <canvas canvas-id="canvas" id="canvas" class="canvas"/>
      </div>
      <div class="poster">
        <img :src="posterSrc" alt="post" v-if="posterSrc">
      </div>
    </div>
  </div>
</template>
<script>
import {useBaseStore} from "../../store/base";

export default {
  data() {
    return {
      posterSrc: ""
    }
  },
  computed: {
    initConfig() {
      return useBaseStore().getterInitConfig
    },
    registerInfo() {
      return useBaseStore().getterRegisterInfo
    }
  },
  mounted() {
    const that = this
    const ctx = uni.createCanvasContext('canvas')
    console.log(ctx)
    // 画背景图
    ctx.drawImage('https://static.thefair.net.cn/activity/gnsms/img/poster.png', 0, 0, 355, 624)
    // 写文字
    ctx.font = 'bold 14px "Alibaba PuHuiTi Bold"'
    // 写文字阴影
    ctx.shadowOffsetY = 6
    ctx.shadowColor = 'rgba(0,0,0,0.5)'
    const marginLeft = 20
    const lineSpace = 15
    const lineHeight = 21
    const firstY = 260
    ctx.fillStyle = 'white'
    ctx.fillText(`来自${this.registerInfo.city}的`, marginLeft, firstY)
    ctx.fillStyle = 'rgba(255, 133, 165, 1)'
    const baseWidth = 43
    const letterWidth = 14
    const width = baseWidth + this.registerInfo.city.length * letterWidth
    ctx.fillText(`@${this.registerInfo.nick}`, marginLeft + width, firstY)
    ctx.fillStyle = 'white'
    ctx.fillText('你已成功报名晚安短信', marginLeft, firstY + lineHeight)
    ctx.fillText('12月25日起，每晚10:00', marginLeft, firstY + lineHeight * 2 + lineSpace)
    ctx.fillText('都有人跟你说晚安', marginLeft, firstY + lineHeight * 2 + lineSpace + lineHeight)
    ctx.fillText('在不定期的一天', marginLeft, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace)
    ctx.fillText('你还会与陌生人交换晚安', marginLeft, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight)

    // 画二维码容器
    const qrCodeContainerMarginTop = 38
    const qrCodeContainerWidth = 111
    const qrCodeContainerHeight = 137
    const qrCodeContainerPadding = 10
    const qrcode = this.initConfig.poster.qrcode
    if (qrcode) {
      ctx.shadowOffsetY = 0
      ctx.fillStyle = 'rgba(0,0,0,0.25)'
      ctx.fillRect(marginLeft, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop, qrCodeContainerWidth, qrCodeContainerHeight)
    }

    // 画二维码
    if (qrcode) {
      ctx.drawImage(qrcode, marginLeft + qrCodeContainerPadding, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop + qrCodeContainerPadding, 91, 91)
    }

    // 画二维码文案
    if (this.initConfig.poster.text) {
      ctx.font = 'bold 8px "Alibaba PuHuiTi Bold"'
      ctx.fillStyle = 'white'
      ctx.shadowOffsetY = 6
      ctx.shadowColor = 'rgba(0,0,0,0.5)'

      if (this.initConfig.poster.text.length > 12) {
        const text1Top = 91 + 8 + 6
        const textLine1 = this.initConfig.poster.text.substring(0, 12)
        ctx.fillText(textLine1, marginLeft + qrCodeContainerPadding - 2, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop + qrCodeContainerPadding + text1Top)
        const text2Top = 12
        const textLine2 = this.initConfig.poster.text.substring(12, this.initConfig.poster.text.length)
        ctx.fillText(textLine2, marginLeft + qrCodeContainerPadding + 18, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop + qrCodeContainerPadding + text1Top + text2Top)
      } else if (this.initConfig.poster.text.length === 4) {
        const textTop = 91 + 8 + 6 + 6
        const textLine = this.initConfig.poster.text
        ctx.fillText(textLine, marginLeft + qrCodeContainerPadding + 30, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop + qrCodeContainerPadding + textTop)
      } else {
        const textTop = 91 + 8 + 6 + 6
        const textLine = this.initConfig.poster.text
        ctx.fillText(textLine, marginLeft + qrCodeContainerPadding + 9, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop + qrCodeContainerPadding + textTop)
      }
    }

    // 画合作方logo
    const cooperator = this.initConfig.poster.bottom_logo.url
    const cooperatorWidth = this.initConfig.poster.bottom_logo.width
    const cooperatorHeight = this.initConfig.poster.bottom_logo.height
    const cooperatorTop = 19
    ctx.drawImage(cooperator, marginLeft, firstY + lineHeight * 2 + lineSpace + lineHeight * 2 + lineSpace + lineHeight + qrCodeContainerMarginTop + qrCodeContainerHeight + cooperatorTop, cooperatorWidth, cooperatorHeight)

    ctx.draw()
    setTimeout(() => {
      uni.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 355,
        height: 624,
        destWidth: 710 + 355,
        destHeight: 1248 + 624,
        canvasId: 'canvas',
        success: function (res) {
          console.log(res)
          that.posterSrc = res.tempFilePath
        }
      })
    }, 2000)
  }
}
</script>
<style scoped lang="scss">
.page-poster {
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
    color: white;

    padding: 12px 10px 50px 10px;

    .tips {
      margin-bottom: 10px;

      img {
        width: 310px;
        height: 27px;
      }
    }

    .loading_box {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); //使其定位于页面中心
      min-width: 350px;
      height: 300px;
      padding: 50px;
      //border: 2px solid #9febe0;
      //border-radius: 100px;
      //background: #34495d;

      //设置边框阴影颜色
      //box-shadow: 5px 5px 50px 15px rgba(0, 255, 235, 0.3);
    }

    .loading_box .symbol {
      text-align: center;
    }

    .loading_box .symbol p {
      font-family: Alibaba PuHuiTi Bold;
      font-size: 16px;
      line-height: 15px;
      color: #fff;
      margin: 30px 0 20px 0;
    }

    .loading_box .symbol div {
      //新建一个50×50的正方形
      width: 50px;
      height: 50px;
      margin: 0px auto;

      //使正方形成为一个直径为50的〇
      border-radius: 50%;

      //给圆圈添加边框
      //添加白色的边框
      border-top: 5px solid #fff;

      //添加透明的边框，目的是让整个div的形状
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid transparent;

      //div的背景颜色
      background: rgba(255, 255, 255, 0);

      //添加旋转动画
      animation-name: rotate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    //该动画用于实现画面中不停旋转的圈圈
    @keyframes rotate {
      0% {
        //选转div元素为0度
        transform: rotate(0deg);
      }
      100% {
        //旋转到360度
        transform: rotate(360deg);
      }
    }

    .canvas-container {
      flex-shrink: 0;
      border-radius: 5px;
      overflow: hidden;
      display: flex;

      position: absolute;
      z-index: -1;

      .canvas {
        width: 355px;
        height: 624px;
      }
    }

    .poster {
      width: 355px;
      height: 624px;
      flex-shrink: 0;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      position: relative;
      z-index: 100;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
