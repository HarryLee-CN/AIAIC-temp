<script>
import {defineComponent} from 'vue'
import HeaderNav from "./HeaderNav.vue";
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "PagePoster",
  components: {HeaderNav},
  data() {
    return {
      imageHeights: [],
      imageHeightsTotal: 0,
      asset_count: 0,
      backgroundHeight: 0,
      imageAnalysisComplete: false,
      backgroundWidth: 330,
      imageWidth: 304,
      topHeight: 213,
      singleAssetHeight: 56,
      bottomHeight: 359
    }
  },
  computed: {
    isShowPagePoster() {
      return useBaseStore().getterIsShowPagePoster
    },
    posterContent() {
      return useBaseStore().getterPosterContent
    }
  },
  watch: {
    posterContent: {
      handler(posterContent) {
        console.log(posterContent)
        for (let i = 0; i < posterContent.images.length; i++) {
          console.log(posterContent.images[i])
          const image = new Image()
          image.src = posterContent.images[i]
          image.onload = () => {
            // console.log(image)
            const aspectRatio = image.naturalWidth / image.naturalHeight;
            // 定宽 / 比例
            const imageHeight = parseFloat((this.imageWidth / aspectRatio).toFixed(2))
            console.log('Aspect Ratio:', aspectRatio);
            console.log('imageHeight:', imageHeight);
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
    imageAnalysisComplete: {
      handler(imageAnalysisComplete) {
        if (imageAnalysisComplete) {
          this.getBackgroundHeight()
          this.drawCanvas()
        }
      }
    }
  },
  methods: {
    getBackgroundHeight() {
      this.backgroundHeight = this.topHeight + this.asset_count * this.singleAssetHeight + this.bottomHeight
      console.log('backgroundHeight', this.backgroundHeight)
      document.getElementById('canvas').style.height = this.backgroundHeight + 'px'
      document.getElementById('canvas').style.border = '1px red solid'
    },
    drawCanvas() {
      const that = this
      const ctx = uni.createCanvasContext('canvas')
      console.log(ctx)
      // 画背景图 头
      ctx.drawImage('https://static.thefair.net.cn/activity/aiaic/poster-bg-top.png', 0, 0, this.backgroundWidth, this.topHeight)

      // 画背景图 中间素材
      for (let i = 0; i < this.asset_count; i++) {
        ctx.drawImage('https://static.thefair.net.cn/activity/aiaic/poster-bg-asset.png', 0, this.topHeight + this.singleAssetHeight * i, this.backgroundWidth, this.singleAssetHeight)
      }

      // 画背景图 尾
      ctx.drawImage('https://static.thefair.net.cn/activity/aiaic/poster-bg-bottom.png', 0, this.topHeight + this.singleAssetHeight * this.asset_count, this.backgroundWidth, this.bottomHeight)

      // 写文字
      ctx.font = "600 13px Source Han Serif CN"
      const marginLeft = 15.3
      const lineHeight = 18.5
      const lineSpace = 6
      const firstY = 154
      ctx.fillStyle = 'white'
      ctx.fillText(`作品名：《${this.posterContent.title}》`, marginLeft, lineHeight + firstY)
      ctx.fillText(`创作者：${this.posterContent.nick}`, marginLeft, lineHeight + firstY + lineHeight + lineSpace)

      // 画图片
      for (let i = 0; i < this.posterContent.images.length; i++) {
        const src = this.posterContent.images[i]
        const imageMargin = 16
        if (i === 0) {
          ctx.drawImage(src, marginLeft, lineHeight + firstY + lineHeight + lineSpace + imageMargin, this.imageWidth, this.imageHeights[i])
        } else {
          ctx.drawImage(src, marginLeft, lineHeight + firstY + lineHeight + lineSpace + imageMargin * (i + 1) + this.imageHeights[i - 1] * i, this.imageWidth, this.imageHeights[i])
        }
      }

      ctx.draw()
    }
  },
  mounted() {
  }
})
</script>

<template>
  <div class="page-poster" v-if="isShowPagePoster">
    <header-nav/>
    <img class="top" src="../static/img/bg-poster-top.png" alt="top">

    <div class="canvas-container">
      <canvas canvas-id="canvas" id="canvas" class="canvas" ref="canvas"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-poster {
  font-family: "Source Han Serif CN";
  padding-top: 50px;
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

    .canvas {
      width: 330px;
    }
  }
}
</style>
