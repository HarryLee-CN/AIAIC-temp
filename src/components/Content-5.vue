<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-5"
})
</script>

<template>
<div class="content-5">
  <div class="text">
    <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">
    <p>
      联合发起：UCCA Lab、真格基金、线性资本<br>
      特邀合作：Midjourney<br>
      媒体支持：Design360<br>
      推荐使用工具：悠船App、右脑Vega.ai 、Tiamat<br>
      （此处logo，文字先占位）<br>
    </p>
  </div>
  <img class="bg" src="../static/img/bg-support.png" alt="bg">
</div>
</template>

<style scoped lang="scss">

.content-5 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    width: 100%;
    padding: 45px 33px 0 50px;
    margin-top: 46px;
    position: relative;

    font-family: Source Han Serif CN;
    font-size: 15px;
    font-weight: 250;
    line-height: 26px;
    text-align: justified;

    .bg2 {
      width: 40px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .bg {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
</style>
