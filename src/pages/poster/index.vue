<template>
  <div id="fullpage">
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleClick() {
      uni.navigateTo({
        url: "/pages/poster/index"
      })
    }
  },
  mounted() {
    const fullpage = window.fullpage
    new fullpage('#fullpage', {
      verticalCentered: false,
      autoScrolling:true,
      scrollHorizontally: true
    });
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
