<script>
import {useBaseStore} from "../store/base";
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-3",
  computed: {
    isLogin() {
      return useBaseStore().getterIsLogin
    }
  },
  methods: {
    handleSignUp() {
      if (!this.isLogin) {
        // 打开注册弹窗
        useBaseStore().updateIsShowModalRegister(true)
      } else {
        // 打开提交页面
        useBaseStore().updateIsShowPageSubmit(true)
      }
    }
  }
})
</script>

<template>
  <div class="content-3">
    <img class="bg-side" src="../static/img/bg-call-for-works-1.png" alt="bg-side">
    <div class="text">
      <!--    <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">-->
      <p>
        - 征集时间：2024年4月18日-5月6日
      </p>
      <p>
        - 征集说明：
      </p>
      <p>
        1.请以「爱恨情仇」为主题，使用AI工具，创作一幅或一组能够反映主题的平面影像作品，风格不限。
      </p>

      <p>
        2.你可以选择「爱恨情仇」中的一个字或多个字，来进行创作。作品可以反映对情感、人际关系以及AI如何理解和表达这些复杂情感的思考。
      </p>

      <p>
        3.投稿作品可使用任意AI工具生成，仅允许后期裁剪、调整色调及滤镜，不可使用设计软件进行合成处理。
      </p>

      <p>
        4.作品提交时，请注明使用的AI工具，并简短描述创作思路、关键词等信息，可以是画面设定的故事、场景介绍等。作为评审参考，创作者需保证投稿作品生成的过程可重现。
      </p>

      <p>
        5.我们接受纪实摄影的、艺术的表达，但希望作品具有「现实感」，内容能够反映准现实的生活——可以是发生在过去某个时间点的客观事件的重构，可以是合理推想的社会场景。希望你的作品场景虽不发生在现实里、但能以真实的意象展现「爱恨情仇」。
      </p>

      <p>
        6.我们将从想象力、创造力、现实理解力和共鸣性的维度出发，参考评奖。
      </p>

      <p>
        - 奖项设置：<br>
        金奖*1位，奖金10000元<br>
        银奖*2位，奖金各5000元<br>
        铜奖*5位，奖金各3000元<br>
        入围奖*100位（含金银铜奖获得者）<br>
      </p>

      <p>
        获奖者信息将在「新世相」公众号进行公示公布，同时，我们将为所有入围创作者在阿那亚举办作品展览。
      </p>

      <p style="font-size: 13px;color: #DEDEDE;">
        *活动的最终解释权，归AIAF组委会所有。
      </p>
    </div>
    <img class="btn" src="../static/img/btn-sign-up.png" alt="btn" @click="handleSignUp">
  </div>
</template>

<style scoped lang="scss">

@media (min-width: 768px) {
  .content-3 {
    .bg-side {
      position: absolute !important;
    }
  }
}

.content-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .bg-side {
    width: 25px;
    height: 686px;
    position: fixed;
    right: 0;
  }

  .text {
    width: 100%;
    padding: 19px 50px 0 50px;
    margin-top: 24px;
    position: relative;

    font-family: Source Han Serif CN;
    font-size: 15px;
    font-weight: 250;
    line-height: 26px;
    text-align: justify;

    //.bg2 {
    //  width: 40px;
    //  position: absolute;
    //  left: 0;
    //  top: 0;
    //}
  }

  .btn {
    width: 329px;
    margin: 36px 43px 29px 42px;
  }
}
</style>
