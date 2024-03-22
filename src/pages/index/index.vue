<template>
  <div id="fullpage">
    <div class="section">
      <div class="content" ref="content-1">
        <content-1/>
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
</template>

<script>
import Content1 from "../../components/Content-1.vue";
import Content2 from "../../components/Content-2.vue";
import Content3 from "../../components/Content-3.vue";
import Content4 from "../../components/Content-4.vue";
import Content5 from "../../components/Content-5.vue";

export default {
  components: {Content1, Content2, Content3, Content4, Content5,},
  data() {
    return {
      fullPage: {}
    }
  },
  computed: {},
  methods: {
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
        console.log(origin, destination, direction, trigger)
        switch (destination.index + 1) {
          case 1:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].className = 'cell top';

            this.$refs['cell-2'].style = `top: ${clientHeight - 56 * 4}px`;
            this.$refs['cell-2'].className = 'cell';
            this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
            this.$refs['cell-3'].className = 'cell';
            this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
            this.$refs['cell-4'].className = 'cell';
            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].className = 'cell';
            break;
          case 2:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].className = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].className = 'cell top';

            this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
            this.$refs['cell-3'].className = 'cell';
            this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
            this.$refs['cell-4'].className = 'cell';
            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].className = 'cell';
            break;
          case 3:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].className = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].className = 'cell top';
            this.$refs['cell-3'].style = `top: 0`;
            this.$refs['cell-3'].className = 'cell top';

            this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
            this.$refs['cell-4'].className = 'cell';
            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].className = 'cell';
            break;
          case 4:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].className = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].className = 'cell top';
            this.$refs['cell-3'].style = `top: 0`;
            this.$refs['cell-3'].className = 'cell top';
            this.$refs['cell-4'].style = `top: 0`;
            this.$refs['cell-4'].className = 'cell top';

            this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
            this.$refs['cell-5'].className = 'cell';
            break;
          case 5:
            this.$refs['cell-1'].style = 'top: 0';
            this.$refs['cell-1'].className = 'cell top';
            this.$refs['cell-2'].style = `top: 0`;
            this.$refs['cell-2'].className = 'cell top';
            this.$refs['cell-3'].style = `top: 0`;
            this.$refs['cell-3'].className = 'cell top';
            this.$refs['cell-4'].style = `top: 0`;
            this.$refs['cell-4'].className = 'cell top';
            this.$refs['cell-5'].style = `top: 0`;
            this.$refs['cell-5'].className = 'cell top';
            break;
        }
      },
    });
  },
  onLoad(query) {
  }
}
</script>

<style scoped lang="scss">

.cells {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;

  .top {
    box-shadow: 0px 2px 11px 0px #00000045 !important;
    background: #191919 !important;

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
    }

    .arrow {
      margin-top: -6px;
      width: 28px;
    }
  }
}
</style>
