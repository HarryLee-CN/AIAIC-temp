<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-2"
})
</script>

<template>
<div class="content-2">
  <div class="text">
    <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">
    <img class="bg-side" src="../static/img/bg-call-for-works-1.png" alt="bg-side">
    <p>
      征集主题：爱恨情仇
    </p>
    <p>
      征集时间：2024.3.25-2024.4.07
    </p>
    <p>
      征集说明：
    </p>
    <p>
      1. 请你结合主题，以 AI作为主要工具，创作一幅或一组能够反映主题的影像作品，风格不限。
    </p>
    <p>
      2. 我们接受纪实摄影的、艺术的表达，但希望作品具有「现实感」，内容能够反映准现实的生活——可以是发生在过去某个时间点的客观事件的重构，可以是合理推想的社会场景。
    </p>
    <p>
      希望你的作品场景虽也许不发生在现实里、但能以真实的意象展现「爱恨情仇」
    </p>
    <p>
      3. 你可以选择「爱恨情仇」中的一个字或多个字，来进行创作。
    </p>
    <p>
      期待你的作品可以反映对情感、人际关系以及AI如何理解和表达这些复杂情感的思考，包括想象力、创造力、现实理解力和共鸣性，这也是「优秀作品」的评选维度。
    </p>
    <p>
      4. 这个创作计划整体也将是一次持续发生、开放的作品，每位创作者都是这个作品的共同行动者。
    </p>
    <p>
      5.作品分辨率XXX提交上传文件要求XXXX最终解释权XXXXX
    </p>
  </div>
  <img class="btn" src="../static/img/btn-sign-up.png" alt="btn">
</div>
</template>

<style scoped lang="scss">

.content-2 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    width: 100%;
    padding: 19px 50px 0 50px;
    margin-top: 24px;
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

    .bg-side {
      width: 25px;
      position: absolute;
      right: 0;
      top: -24px;
    }

    p {
    }
  }

  .btn {
    width: 329px;
    margin: 55px auto;
  }
}
</style>
