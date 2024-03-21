<template>
  <div class="page-index">
    <!-- 首页 -->
    <div class="content">
      <div class="loading_box">
        <div class="symbol">
          <p>加载中...</p>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.page-index {
  width: 100vw;
  height: 100vh;

  .content {
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

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
  }
}
</style>
