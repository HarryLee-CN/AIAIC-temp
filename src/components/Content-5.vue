<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-5"
})
</script>

<template>
<div class="content-5">
  <img class="bg1" src="../static/img/bg-introduction-1.png" alt="bg1">
  <div class="text">
    <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">
    <p>
      AIAIC 的 mission 之一是提供一个契机，激励更多有创造力的人加入 AI 创作中来，并且联合所有使用 AI
      作为工具的人，共同探索令人兴奋的新的内容和创意可能。「联合」是重要的，「人的联盟」这个描述，在这个AI快速成长的时代，将是亲密相连的温暖命题。
    </p>
  </div>
</div>
</template>

<style scoped lang="scss">

.content-5 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .bg1 {
    width: 100%;
  }

  .header {
    width: 327.5px;
    margin-top: 6.5px;
    margin-left: 3.5px;
  }

  .text {
    width: 100%;
    padding: 19px 50px 0 50px;
    margin-top: 45px;
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

    p {
      margin-bottom: 30px;
    }
  }
}
</style>
