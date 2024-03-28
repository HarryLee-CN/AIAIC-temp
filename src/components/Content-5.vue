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
      <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">
      <div class="block">
        <div class="title">顾问团队</div>
        <div class="divider"/>
        <img class="photo" src="../static/img/team.png" alt="team">
        <div class="divider"/>
      </div>
      <div class="block">
        <div class="title">合作支持</div>
      </div>
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
    padding: 25px;
    margin-top: 9px;
    position: relative;

    .bg2 {
      width: 40px;
      position: absolute;
      left: 0;
      top: 0;
    }

    .block {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-family: Source Han Serif CN;
        font-size: 16.8px;
        font-weight: 250;
        line-height: 21px;
        text-align: left;

        color: #191919;
        width: 100%;
        padding-left: 10px;
      }

      .divider {
        width: 100%;
        height: 0.5px;
        background-color: #191919;
        margin-top: 22px;
      }

      .photo {
        width: 100%;
        padding: 0 10px;
        margin-top: 21px;
      }
    }
  }
}
</style>
