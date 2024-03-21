<template>
  <div id="fullpage">
    <div class="section">
      <div class="content" ref="content-1">
        <div v-for="(item, index) in 100">活动介绍{{index}}</div>
      </div>
    </div>
    <div class="section">
      <div class="content" ref="content-2">
        <div v-for="(item, index) in 100">作品征集{{index}}</div>
      </div>
    </div>
    <div class="section">
      <div class="content" ref="content-3">
        <div v-for="(item, index) in 100">作品展示{{index}}</div>
      </div>
    </div>
    <div class="section">
      <div class="content" ref="content-4">
        <div v-for="(item, index) in 100">顾问团队{{index}}</div>
      </div>
    </div>
    <div class="section">
      <div class="content" ref="content-5">
        <div v-for="(item, index) in 100">合作支持{{index}}</div>
      </div>
    </div>
  </div>
  <div class="cells">
    <div class="cell cell-1" @click="handleClick(1)" ref="cell-1">活动介绍</div>
    <div class="cell cell-2" @click="handleClick(2)" ref="cell-2">作品征集</div>
    <div class="cell cell-3" @click="handleClick(3)" ref="cell-3">作品展示</div>
    <div class="cell cell-4" @click="handleClick(4)" ref="cell-4">顾问团队</div>
    <div class="cell cell-5" @click="handleClick(5)" ref="cell-5">合作支持</div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleClick(e) {
      alert(e)
    }
  },
  mounted() {
    const viewportHeight1 = document.body.clientHeight - 56 * 5
    const viewportHeight2 = document.body.clientHeight - 56 * 4
    const viewportHeight3 = document.body.clientHeight - 56 * 3
    const viewportHeight4 = document.body.clientHeight - 56 * 2

    this.$refs['content-1'].style = `padding-top: 56px;padding-bottom: 224px`
    this.$refs['content-2'].style = `padding-top: 56px;padding-bottom: 168px`
    this.$refs['content-3'].style = `padding-top: 56px;padding-bottom: 112px`
    this.$refs['content-4'].style = `padding-top: 56px;padding-bottom: 56px`
    this.$refs['content-5'].style = `padding-top: 56px;padding-bottom: 0`


    this.$refs['cell-1'].style = `top: 0`;
    this.$refs['cell-2'].style = `top: ${viewportHeight1 + 56}px`;
    this.$refs['cell-3'].style = `top: ${viewportHeight2 + 56}px`;
    this.$refs['cell-4'].style = `top: ${viewportHeight3 + 56}px`;
    this.$refs['cell-5'].style = `top: ${viewportHeight4 + 56}px`;

    const fullpage = window.fullpage
    new fullpage('#fullpage', {
      verticalCentered: false,
      autoScrolling: true,
      scrollHorizontally: true,
      scrollOverflow: true,
      onLeave: (origin, destination, direction, trigger) => {
        switch (origin.index + 1) {
          case 1:
            if(direction === 'up') {
              // 不存在
            }
            if(direction === 'down') {
              this.$refs['cell-2'].style = 'top: 0';
            }
            break;
          case 2:
            if(direction === 'up') {
              this.$refs['cell-2'].style = `top: ${viewportHeight1 + 56}px`;
            }
            if(direction === 'down') {
              this.$refs['cell-3'].style = 'top: 0';
            }
            break;
          case 3:
            if(direction === 'up') {
              this.$refs['cell-3'].style = `top: ${viewportHeight2 + 56}px`;
            }
            if(direction === 'down') {
              this.$refs['cell-4'].style = 'top: 0';
            }
            break;
          case 4:
            if(direction === 'up') {
              this.$refs['cell-4'].style = `top: ${viewportHeight3 + 56}px`;
            }
            if(direction === 'down') {
              this.$refs['cell-5'].style = 'top: 0';
            }
            break;
          case 5:
            if(direction === 'up') {
              this.$refs['cell-5'].style = `top: ${viewportHeight4 + 56}px`;
            }
            if(direction === 'down') {
              // 不存在
            }
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
  border: 2px red solid;
  top: 0;
  left: 0;
  pointer-events: none;

  .cell {
    pointer-events: auto;
    width: 100%;
    height: 56px;
    border: 1px red solid;
    box-shadow: 0px 2px 11px 0px #00000045;
    background: #191919;

    color: #FFFFFF;

    font-family: Source Han Serif CN;
    font-size: 16.59px;
    font-weight: 500;
    line-height: 23.84px;
    letter-spacing: -0.6635649800300598px;
    text-align: left;

    position: fixed;
    transition: all 500ms ease-in-out;
  }
}

.content {
  border: 10px red solid;
}
</style>
