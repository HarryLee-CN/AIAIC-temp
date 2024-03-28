<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-2"
})
</script>

<template>
<div class="content-2">
  <img class="bg-side" src="../static/img/bg-introduction-side.png" alt="side">
  <div class="text">
    <img class="bg2" src="../static/img/bg-introduction-2.png" alt="bg2">
    <p>
      首届 AIAIC（Artificial Intelligence Art Innovation Challenge）：「AI影像创作计划」由新世相联合UCCA
      Lab、真格基金、线性资本，特别邀请 MidJourney 作为合作伙伴共同发起，是一次面向全球华人为主的创作者及 AI
      爱好者的共同创作行动。
    </p>
    <p>
      人工智能正在快速重塑世界，它的不断迭代为人类世界带来了丰富的可能。而我们相信，在变化带来的无数不确定性中，“人类精神”将更凸显其迷人、其不可替代，正如历史上的每一次技术革新。
    </p>
    <p>
      首届AIAIC将聚焦「图片」创作，以“爱恨情仇”为主题，号召内容及艺术创作者与AI爱好者，以AI为核心工具和方法完成内容创作。所有评选出的优秀作品将作为
      AI 时代的人类创作者联盟的作品集中呈现、发布。
    </p>
    <p>
      所谓“爱恨情仇”，即人类复杂且多样的基本情感。作为首届挑战赛的创作命题，我们希望以此探索机械语言对人类复杂情感的理解力、想象力和传达效力，并彰显“人类精神”的迷人与可贵。
    </p>
    <p>
      关于AIAIC
    </p>
    <p>
      AIAIC（Artificial Intelligence Art Innovation
      Challenge）作为一个比赛和创造力嘉年华，由新世相联合真格基金、线性资本主办，与人工智能、艺术与内容创作行业的机构与个人联合体共同发起。
    </p>
    <p>
      每届 AIAIC 挑战赛将设定一个完整命题，策划不同活动形式，邀请挑战者以 AI 为核心工具和方法完成内容创作。所有优秀作品将作为
      AI 时代的人类创作者联盟的作品集中呈现、发布。我们将邀请人工智能技术领域以及艺术文化领域的优秀代表组成顾问团/评委会，选出最能体现人类使用
      AI 工具展现创意和人类精神的作品。
    </p>
    <p>
      AIAIC 的 mission 之一是提供一个契机，激励更多有创造力的人加入 AI 创作中来，并且联合所有使用 AI
      作为工具的人，共同探索令人兴奋的新的内容和创意可能。「联合」是重要的，「人的联盟」这个描述，在这个AI快速成长的时代，将是亲密相连的温暖命题。
    </p>
  </div>
</div>
</template>

<style scoped lang="scss">

.content-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .bg-side {
    width: 17px;
    left: 0;
    position: fixed;
  }

  .text {
    width: 100%;
    padding: 9px 50.5px 0 51.5px;
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
      left: 17px;
      top: -35px;
    }

    p {
      margin-bottom: 30px;
    }
  }
}
</style>
