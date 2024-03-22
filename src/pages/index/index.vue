<template>
  <div class="page-index">
    <div class="cover" @touchmove="handleTouchmove" @touchstart="handleTouchstart" ref="cover">
      <img src="../../static/img/cover.png" alt="cover">
      <div class="tips">
        下滑进入
      </div>
      <img class="icon-arrow-down" src="../../static/img/icon-arrow-down.svg" alt="down">
    </div>

    <div id="fullpage">
      <div class="section">
        <div class="content" ref="content-1">
          <content-1 @touchmove="handleFirstScreenTouchmove" @touchstart="handleFirstScreenTouchstart"/>
        </div>
      </div>
      <div class="section">
        <div class="content" ref="content-2">
          <content-2/>
        </div>
      </div>
      <div class="section">
        <div class="content" ref="content-3">
          <content-3/>
        </div>
      </div>
      <div class="section">
        <div class="content" ref="content-4">
          <content-4/>
        </div>
      </div>
      <div class="section">
        <div class="content" ref="content-5">
          <content-5/>
        </div>
      </div>
    </div>

    <div class="cells">
      <div class="cell top" @click="handleClick(1)" ref="cell-1">
        <div class="left">
          <div class="title">活动介绍</div>
          <div class="eng">Introduction</div>
        </div>
        <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
      </div>
      <div class="cell" @click="handleClick(2)" ref="cell-2">
        <div class="left">
          <div class="title" style="color: #70C6F6 !important;">作品征集</div>
          <div class="eng">Call for works</div>
        </div>
        <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
      </div>
      <div class="cell" @click="handleClick(3)" ref="cell-3">
        <div class="left">
          <div class="title">作品展示</div>
          <div class="eng">Display</div>
        </div>
        <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
      </div>
      <div class="cell cell-4" @click="handleClick(4)" ref="cell-4">
        <div class="left">
          <div class="title">顾问团队</div>
          <div class="eng">Counselor</div>
        </div>
        <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
      </div>
      <div class="cell cell-5" @click="handleClick(5)" ref="cell-5">
        <div class="left">
          <div class="title">合作支持</div>
          <div class="eng">Support</div>
        </div>
        <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
      </div>
    </div>
  </div>
</template>

<script>
import Content1 from "../../components/Content-1.vue";
import Content2 from "../../components/Content-2.vue";
import Content3 from "../../components/Content-3.vue";
import Content4 from "../../components/Content-4.vue";
import Content5 from "../../components/Content-5.vue";
import _ from 'lodash'

export default {
  components: {Content1, Content2, Content3, Content4, Content5,},
  data() {
    return {
      pageYStart: "",
      fullPage: {},
      isReachTop: true,
    }
  },
  computed: {},
  methods: {
    handleTouchstart(e) {
      this.pageYStart = e.touches[0].pageY
    },
    handleTouchmove(e) {
      const pageY = e.touches[0].pageY
      if (this.pageYStart - pageY > 100) {
        this.$refs.cover.classList = "cover cover-hide"
        setTimeout(e => {
          this.$refs.cover.style = "display: none"
        }, 600)
      }
    },

    handleFirstScreenTouchstart(e) {
      if (!this.isReachTop) return
      this.pageYStart = e.touches[0].pageY
    },
    handleFirstScreenTouchmove(e) {
      if (!this.isReachTop) return
      const pageY = e.touches[0].pageY
      if (pageY - this.pageYStart > 20) {
        this.$refs.cover.style = "display: flex;"
        setTimeout(() => {
          this.$refs.cover.classList = "cover cover-show"
        })
      }
    },

    handleClick(e) {
      this.fullPage.moveTo(e)
    }
  },
  mounted() {
    const clientHeight = document.body.clientHeight

    this.$refs['content-1'].style = `padding-top: 56px;padding-bottom: 224px`
    this.$refs['content-2'].style = `padding-top: 56px;padding-bottom: 168px`
    this.$refs['content-3'].style = `padding-top: 56px;padding-bottom: 112px`
    this.$refs['content-4'].style = `padding-top: 56px;padding-bottom: 56px`
    this.$refs['content-5'].style = `padding-top: 56px;padding-bottom: 0`


    this.$refs['cell-1'].style = `top: 0`;
    this.$refs['cell-2'].style = `top: ${clientHeight - 56 * 4}px`;
    this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
    this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
    this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;

    this.fullPage = new window.fullpage('#fullpage', {
      verticalCentered: false,
      autoScrolling: true,
      scrollHorizontally: true,
      scrollOverflow: true,
      onLeave: (origin, destination, direction, trigger) => {
        switch (destination.index + 1) {
          case 1:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].classList = 'cell top';

            this.$refs['cell-2'].style = `top: ${clientHeight - 56 * 4}px`;
            this.$refs['cell-2'].classList = 'cell';
            this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
            this.$refs['cell-3'].classList = 'cell';
            this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
            this.$refs['cell-4'].classList = 'cell';
            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].classList = 'cell';
            break;
          case 2:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].classList = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].classList = 'cell top';

            this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
            this.$refs['cell-3'].classList = 'cell';
            this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
            this.$refs['cell-4'].classList = 'cell';
            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].classList = 'cell';
            break;
          case 3:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].classList = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].classList = 'cell top';
            this.$refs['cell-3'].style = `top: 0`;
            this.$refs['cell-3'].classList = 'cell top';

            this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
            this.$refs['cell-4'].classList = 'cell';
            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].classList = 'cell';
            break;
          case 4:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].classList = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].classList = 'cell top';
            this.$refs['cell-3'].style = `top: 0`;
            this.$refs['cell-3'].classList = 'cell top';
            this.$refs['cell-4'].style = `top: 0`;
            this.$refs['cell-4'].classList = 'cell top';

            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].classList = 'cell';
            break;
          case 5:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].classList = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].classList = 'cell top';
            this.$refs['cell-3'].style = `top: 0`;
            this.$refs['cell-3'].classList = 'cell top';
            this.$refs['cell-4'].style = `top: 0`;
            this.$refs['cell-4'].classList = 'cell top';
            this.$refs['cell-5'].style = `top: 0`;
            this.$refs['cell-5'].classList = 'cell top';
            break;
        }
      },
    });

    document.getElementsByClassName("fp-overflow")[0].addEventListener("scroll",e => {
      this.isReachTop = e.target.scrollTop <= 0
    } )
  },
  onLoad(query) {
  }
}
</script>

<style scoped lang="scss">

.cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.6s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: cover;
  }

  .tips {
    position: absolute;
    bottom: 69px;
    font-family: Source Han Serif CN;
    font-size: 18.4px;
    font-weight: 400;
    line-height: 26.44px;
    text-align: left;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-arrow-down {
    position: absolute;
    bottom: 50px;

    width: 26px;
    height: 12px;
    object-fit: contain;
    object-position: center center;

    -webkit-animation: up_and_down 1.5s ease-in-out infinite;
    -o-animation: up_and_down 1.5s ease-in-out infinite;
    animation: up_and_down 1.5s ease-in-out infinite;
  }

  @keyframes up_and_down {
    from {
      bottom: 50px;
    }
    50% {
      bottom: 30px;
    }
    to {
      bottom: 50px;
    }
  }
}

.cover-hide {
  top: -300px;
  opacity: 0;
}

.cover-show {
  top: 0;
  opacity: 1;
}

.cells {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;

  .top {
    box-shadow: 0px 2px 11px 0px #00000045 !important;
    background: #3f3f3f !important;

    .title {
      color: #FFFFFF !important;
    }

    .eng {
      opacity: 0.19;
    }
  }

  .cell {
    pointer-events: auto;
    width: 100%;
    height: 56px;
    box-shadow: 0px -2px 8px 0px #0000001B;
    background: #FFFFFF;

    border-bottom: 0.5px #191919 solid;

    position: fixed;
    transition: all 500ms ease-in-out;

    display: flex;
    justify-content: space-between;
    padding: 19px 11px 0 29px;

    .left {
      display: flex;
    }

    .title {
      font-family: Source Han Serif CN;
      font-size: 16.59px;
      font-weight: 500;
      line-height: 23.84px;
      letter-spacing: -0.6635649800300598px;
      text-align: left;

      color: #191919;
      transition: all 500ms ease-in-out;
    }

    .eng {
      margin-left: 15px;

      font-family: Source Han Serif CN;
      font-size: 16.59px;
      font-weight: 400;
      line-height: 23.84px;
      letter-spacing: -0.6635649800300598px;
      text-align: left;

      color: #DEDEDE;
      transition: all 500ms ease-in-out;
    }

    .arrow {
      margin-top: -6px;
      width: 28px;
    }
  }
}
</style>
