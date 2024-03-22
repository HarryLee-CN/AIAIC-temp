<template>
  <div class="page-index">
    <div class="cell cell-1">
      活动介绍
    </div>
    <div class="content A" ref="A">
      <img src="../../static/img/introduce.jpg" alt="introduce">
    </div>
    <div class="cell cell-2">
      作品征集
    </div>
    <div class="content B" ref="B">
      <img src="../../static/img/call-for-works.jpg" alt="call-for-works">
    </div>
    <div class="cell cell-3">
      作品展示
    </div>
    <div class="content C" ref="C">
      <img src="../../static/img/display-1.jpg" alt="display-1">
      <img src="../../static/img/display-2.jpg" alt="display-2">
    </div>
    <div class="cell cell-4">
      顾问团队
    </div>
    <div class="content D" ref="D">
      <img src="../../static/img/counselor.jpg" alt="counselor">
    </div>
    <div class="cell cell-5">
      合作支持
    </div>
    <div class="content E" ref="E">
      <img src="../../static/img/support.jpg" alt="support">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleClick() {
      uni.navigateTo({
        url: "/pages/poster/index"
      })
    }
  },
  mounted() {
  },
  onLoad(query) {
  }
}
</script>

<style scoped lang="scss">
.page-index {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  .cell {
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

    position: sticky;
    top: 0;
  }

  .cell-2 {
    bottom: calc(56px * 3);
  }

  .cell-3 {
    bottom: calc(56px * 2);
  }

  .cell-4 {
    bottom: calc(56px * 1);
  }

  .cell-5 {
    bottom: calc(56px * 0);
  }

  .content {
    img {
      width: 100%;
    }
  }

  .A {
    border: 1px red solid;
  }

  .B {
    border: 1px red solid;
  }

  .C {
    border: 1px red solid;
  }

  .D {
    border: 1px red solid;
  }

  .E {
    border: 1px red solid;
  }
}
</style>
