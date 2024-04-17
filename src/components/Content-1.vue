<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-1"
})
</script>

<template>
  <div class="content-1">
    <img class="bg1" src="../static/img/bg-introduction-1.png" alt="bg1">
    <img class="header" src="../static/img/header-introduction.png" alt="header">
    <div class="text">
      <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">
      <p>
        这是一次面向所有创作者，以及 AI 创作者的共同创作行动。这也是一次我们以「人类」这个身份为联盟，对「AI 时代」做出的回应。
      </p>

      <p>
        AI 的流行是无须赘述的背景。短短数月，ChatGPT、Midjourney、Sora 接连上线，我们已见证了何谓“全球热议”。即便只用旧的经验，你我也能意识到，一个新的未来在萌芽。
      </p>

      <p>
        新语言，新价值，新的灵感和创造在发生。
      </p>

      <p>
        新世相是一个对新的方法和工具反应敏锐的内容品牌。我们关心一切新的介质，并试图在其中探寻内容表达的新的可能性，以及它对普罗大众的价值。
      </p>

      <p>
        而 AI 时代令人兴奋之处，正在于它用工具打碎了创作的门槛。因此，我们邀请正在为这个时代而兴奋的你参与其中。你要做的，是<strong style="font-weight: 1000">以「爱恨情仇」中的一个字或多个字为主题，创作一幅或一组图像作品。</strong>
      </p>

      <p>
        所谓「爱恨情仇」，即人类复杂且多样的基本情感。作为首届创作行动的命题，我们希望以此探索机械语言对人类复杂情感的理解力、想象力和传达效力，并彰显“人类精神”的迷人与可贵。
      </p>

      <p>
        如果你也对创作有渴望，对新事物有迷恋和追求；如果你也想踩着代码的梯子，探一探自己创造力的上限；如果你也想书写「爱恨情仇」；请加入这场共同创作行动。
      </p>

      <p>
        我们一起，汇入一条新的河流。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-1 {
  display: flex;
  flex-direction: column;
  align-items: center;

  .bg1 {
    width: 100%;
  }

  .header {
    width: 100%;
    //width: 327.5px;
    padding-left: 47px;
    padding-right: 40px;
    margin-top: 16px;
  }

  .text {
    width: 100%;
    padding: 0px 50.5px 0 51.5px;
    margin-top: 40px;
    position: relative;

    font-family: Source Han Serif CN;
    font-size: 15px;
    font-weight: 250;
    line-height: 26px;
    text-align: justify;

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
