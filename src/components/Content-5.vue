<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-5"
})
</script>

<template>
  <div class="content-5">
    <img class="bg" src="../static/img/bg-support.png" alt="bg">
    <div class="text">
      <img class="img1" src="../static/img/guwentuandui-25.03.04.png" alt="guwentuandui">
      <img class="img2" src="../static/img/teyaochuangzuojiabin.png" alt="teyaochuangzuojiabin">
      <img class="img3" src="../static/img/lianhefaqi.png" alt="lianhefaqi">
<!--      <div class="block" style="margin-top: 9px">-->
<!--        <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">-->
<!--        <div class="title">顾问团队</div>-->
<!--        <div class="divider"/>-->
<!--        <img class="team" src="../static/img/team.png" alt="team">-->
<!--        <div class="divider"/>-->
<!--      </div>-->
<!--      <div class="block" style="margin-top: 30px">-->
<!--        <img class="bg3" src="../static/img/bg-introduction-2.png" alt="bg3">-->
<!--        <div class="title" style="margin-top: 34px">合作支持</div>-->
<!--        <img class="support" src="../static/img/support.png" alt="support">-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-5 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .bg {
    width: 100%;
  }

  .text {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img1 {
      width: 367px;
      margin-top: 24px;
    }

    .img2 {
      width: 372px;
      margin-top: 28px;
      margin-left: 10px;
    }

    .img3 {
      width: 348px;
      margin-top: 27px;
      margin-bottom: 50px;
      margin-left: -16px;
    }

    //.block {
    //  display: flex;
    //  flex-direction: column;
    //  align-items: center;
    //  position: relative;
    //
    //  .bg2 {
    //    position: absolute;
    //    left: 0;
    //    width: 40px;
    //  }
    //
    //  .bg3 {
    //    position: absolute;
    //    left: 0;
    //    width: 40px;
    //  }
    //
    //  .title {
    //    font-family: Source Han Serif CN;
    //    font-size: 16.8px;
    //    font-weight: 250;
    //    line-height: 21px;
    //    text-align: left;
    //
    //    color: #191919;
    //    width: 100%;
    //    padding-left: 35px;
    //    margin-top: 35px;
    //  }
    //
    //  .divider {
    //    max-width: calc(768px - 50px);
    //    width: calc(100vw - 50px);
    //    height: 0.5px;
    //    background-color: #191919;
    //    margin-top: 22px;
    //  }
    //
    //  .team {
    //    width: 100%;
    //    padding: 0 35px;
    //    margin-top: 21px;
    //  }
    //
    //  .support {
    //    width: 100%;
    //    padding: 0 67px 0 38px;
    //    margin-top: 9px;
    //  }
    //}
  }
}
</style>
