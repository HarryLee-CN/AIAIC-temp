<script>
import {defineComponent} from 'vue'
import HeaderNav from "./HeaderNav.vue";
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "PagePoster",
  components: {HeaderNav},
  data() {
    return {
      isLoading: true,
      imageHeights: [],
      imageHeightsTotal: 0,
      asset_count: 0,
      backgroundHeight: 0,
      imageAnalysisComplete: false,
      backgroundWidth: 330,
      imageWidth: 304,
      topHeight: 213,
      singleAssetHeight: 56,
      bottomHeight: 359,

      posterSrc: "",
      canvasMounted: false
    }
  },
  computed: {
    isShowPagePoster() {
      return useBaseStore().getterIsShowPagePoster
    },
    posterContent() {
      return useBaseStore().getterPosterContent
    },
    progressConditions() {
      return {
        canvasMounted: this.canvasMounted,
        imageAnalysisComplete: this.imageAnalysisComplete
      }
    }
  },
  watch: {
    isShowPagePoster(newV, oldV) {
      if (newV === false && oldV === true) {
        this.resetData();
      }
    },
    posterContent: {
      handler(posterContent) {
        if (!posterContent.images.length) return
        console.log('============ start ==============')
        console.log("posterContent", posterContent)
        for (let i = 0; i < posterContent.images.length; i++) {
          const image = new Image()
          image.src = posterContent.images[i]
          image.onload = () => {
            // console.log("image onload", image)
            const aspectRatio = image.naturalWidth / image.naturalHeight;
            // 定宽 / 比例
            const imageHeight = parseFloat((this.imageWidth / aspectRatio).toFixed(2))
            // console.log('Aspect Ratio:', aspectRatio);
            // console.log('imageHeight:', imageHeight);
            // 图片间距
            this.imageHeightsTotal += 16
            // 图片高度
            this.imageHeightsTotal += imageHeight
            this.imageHeights.push(imageHeight)
            // 得到素材数量
            this.asset_count = Math.round(this.imageHeightsTotal / this.singleAssetHeight)
            // 误差速算（素材数量实际不需要这么多）
            if (this.asset_count >= 2) this.asset_count -= 2
            // 分析完毕
            if (i === posterContent.images.length - 1) {
              this.imageAnalysisComplete = true
              console.log("asset_count", this.asset_count)
              console.log("imageAnalysisComplete", this.imageAnalysisComplete)
              console.log("imageHeightsTotal", this.imageHeightsTotal)
              console.log("imageHeights", this.imageHeights)
            }
          }
        }
      },
      immediate: true
    },
    progressConditions: {
      async handler(progressConditions) {
        const {canvasMounted, imageAnalysisComplete} = progressConditions
        console.log({canvasMounted, imageAnalysisComplete})
        if (canvasMounted && imageAnalysisComplete) {
          uni.showLoading()
          // setTimeout(() => {
          await this.getBackgroundHeight()
          // }, 300)
          // setTimeout(() => {
          await this.drawCanvas()
          // }, 500)
          // setTimeout(() => {
          this.exportPoster()
          uni.hideLoading()
          this.isLoading = false
          // }, 2000)
        }
      },
      immediate: true
    }
  },
  methods: {
    checkCanvasMounted() {
      setTimeout(() => {
        console.log("checkCanvasMounted")
        const canvas = document.getElementById('canvas')
        if (!canvas) return this.checkCanvasMounted()
        this.canvasMounted = true
      }, 500)
    },
    getBackgroundHeight() {
      return new Promise(resolve => {
        this.backgroundHeight = this.topHeight + this.asset_count * this.singleAssetHeight + this.bottomHeight
        // console.log('backgroundHeight', this.backgroundHeight)
        document.getElementById('canvas').style.height = this.backgroundHeight + 'px'
        document.getElementById('poster').style.height = this.backgroundHeight + 'px'
        // this.$refs['canvas'].style = `height: ${this.backgroundHeight}px;`
        // this.$refs['poster'].style = `height: ${this.backgroundHeight}px;`
        setTimeout(() => {
          // console.log('canvas height', this.$refs['canvas'].style.height)
          // console.log('poster Height', this.$refs['poster'].style.height)
          resolve()
        }, 1000)
      })
    },
    drawCanvas() {
      return new Promise((resolve) => {
        const that = this
        const ctx = uni.createCanvasContext('canvas')
        console.log('ctx', ctx)
        // 画背景图 头
        ctx.drawImage('https://static.thefair.net.cn/activity/aiaic/static/img/poster-bg-top.png', 0, 0, this.backgroundWidth, this.topHeight)
        console.log('画完头图')

        // 画背景图 中间素材
        for (let i = 0; i < this.asset_count; i++) {
          ctx.drawImage('https://static.thefair.net.cn/activity/aiaic/static/img/poster-bg-asset.png', 0, this.topHeight + this.singleAssetHeight * i, this.backgroundWidth, this.singleAssetHeight)
        }
        console.log('画完中间素材：', this.asset_count, '个')

        // 画背景图 尾
        ctx.drawImage('https://static.thefair.net.cn/activity/aiaic/static/img/poster-bg-bottom.png', 0, this.topHeight + this.singleAssetHeight * this.asset_count, this.backgroundWidth, this.bottomHeight)
        console.log('画完尾图')

        // 写文字
        ctx.font = "600 13px Source Han Serif CN"
        let marginLeft = 15.3
        const lineHeight = 18.5
        const lineSpace = 6
        const firstY = 128 + lineHeight
        ctx.fillStyle = 'white'
        if (this.posterContent.title.length > 10) {
          ctx.fillText(`作品名：《${this.posterContent.title.slice(0, 10)}...》`, marginLeft, firstY)
        } else {
          ctx.fillText(`作品名：《${this.posterContent.title}》`, marginLeft, firstY)
        }
        if (this.posterContent.nick.length > 10) {
          ctx.fillText(`创作者：${this.posterContent.nick.slice(0, 10)}...`, marginLeft, firstY + lineSpace + lineHeight)
        } else {
          ctx.fillText(`创作者：${this.posterContent.nick}`, marginLeft, firstY + lineSpace + lineHeight)
        }
        console.log('画完作品名创作者')

        marginLeft = 13
        // 画图片
        for (let i = 0; i < this.posterContent.images.length; i++) {
          const src = this.posterContent.images[i]
          const imageMargin = 16
          if (i === 0) {
            ctx.drawImage(src, marginLeft, firstY + lineHeight + lineSpace + imageMargin, this.imageWidth, this.imageHeights[i])
          } else if (i === 1) {
            ctx.drawImage(src, marginLeft, firstY + lineHeight + lineSpace + imageMargin * 2 + this.imageHeights[0], this.imageWidth, this.imageHeights[i])
          } else if (i === 2) {
            ctx.drawImage(src, marginLeft, firstY + lineHeight + lineSpace + imageMargin * 3 + this.imageHeights[0] + this.imageHeights[1], this.imageWidth, this.imageHeights[i])
          } else if (i === 3) {
            ctx.drawImage(src, marginLeft, firstY + lineHeight + lineSpace + imageMargin * 4 + this.imageHeights[0] + this.imageHeights[1] + this.imageHeights[2], this.imageWidth, this.imageHeights[i])
          }
        }
        console.log('画完图片', this.posterContent.images)


        // 写结尾
        ctx.font = "600 12px Source Han Serif CN"

        const tipsLineHeight = 17.4
        const tipsMarginTop = 5.5
        ctx.fillText('*提示：海报中图片作品由AI工具创作，仅用于创意呈现。', marginLeft, firstY + lineHeight + lineSpace + this.imageHeightsTotal + tipsLineHeight + tipsMarginTop)

        marginLeft = 34.3
        const qrCodeTipLineHeight = 17.4
        const qrCodeTipMarginTop = 46
        ctx.fillText('扫码查看更多作品', marginLeft, firstY + lineHeight + lineSpace + this.imageHeightsTotal + tipsLineHeight + tipsMarginTop + qrCodeTipLineHeight + qrCodeTipMarginTop)

        const qrcode = "https://static.thefair.net.cn/activity/aiaic/qrcode.png"
        const qrcode_marginTop = 12
        ctx.drawImage(qrcode, marginLeft, firstY + lineHeight + lineSpace + this.imageHeightsTotal + tipsLineHeight + tipsMarginTop + qrCodeTipLineHeight + qrCodeTipMarginTop + qrcode_marginTop, 94, 94)

        console.log('画完结尾')
        ctx.draw(false, () => {
          console.log('ctx.draw complete')
          resolve()
        })
      })
    },
    exportPoster() {
      const that = this
      uni.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: this.backgroundWidth,
        height: this.backgroundHeight,
        destWidth: this.backgroundWidth * 4,
        destHeight: this.backgroundHeight * 4,
        canvasId: 'canvas',
        success: function (res) {
          console.log(res)
          console.log('============ end ==============')
          that.posterSrc = res.tempFilePath
        }
      })
    },

    resetData() {
      useBaseStore().updatePosterContent({images: []})

      this.isLoading = true;
      this.imageHeights = [];
      this.imageHeightsTotal = 0;
      this.asset_count = 0;
      this.backgroundHeight = 0;
      this.imageAnalysisComplete = false;
      this.backgroundWidth = 330;
      this.imageWidth = 304;
      this.topHeight = 213;
      this.singleAssetHeight = 56;
      this.bottomHeight = 359
      this.posterSrc = ""
    },

    again() {
      useBaseStore().updateIsShowPagePoster(false)
      useBaseStore().updateIsShowPageSubmit(true)
    }
  },
  mounted() {
    this.checkCanvasMounted()
  }
})
</script>

<template>
  <div class="page-poster" v-if="isShowPagePoster">
    <img class="top" src="../static/img/bg-poster-top.png" alt="top">
    <header-nav/>
    <div class="canvas-container">
      <canvas canvas-id="canvas" id="canvas" class="canvas" ref="canvas"/>
    </div>
    <div class="poster" id="poster" ref="poster">
      <img :src="posterSrc" alt="post" v-if="posterSrc">
    </div>

    <div v-if="!isLoading" class="tips">
      长按分享我的AI创作
    </div>
    <img v-if="!isLoading" class="again" src="../static/img/btn-submit-again.png" alt="submit-again" @click="again">
  </div>
</template>

<style scoped lang="scss">
.page-poster {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  position: fixed;
  top: 0;
  left: 0;
  background-color: white;

  .top {
    width: 100%;
  }

  .canvas-container {
    margin-top: 6px;
    //border: 2px red solid;

    position: absolute;
    visibility: hidden;

    .canvas {
      width: 330px;
      height: 572px
    }
  }

  .poster {
    margin-top: 6px;
    width: 330px;
    flex-shrink: 0;
    position: relative;
    z-index: 100;

    box-shadow: 0px 2px 7px 0px #00000034;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .tips {
    font-family: Source Han Serif CN;
    font-size: 18.4px;
    font-weight: 250;
    line-height: 25.76px;
    text-align: left;

    color: #191919;

    margin-top: 114px;
    text-decoration: underline;
  }

  .again {
    margin-top: 14px;
    width: 329px;
  }
}
</style>
