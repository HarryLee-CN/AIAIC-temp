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


      <p>AIAF（Artificial Intelligence Art
        Festival）是由新世相联合真格基金、线性资本主办，与人工智能、艺术与内容创作行业的机构与个人联合体共同发起。</p>
      <p>每届AI艺术节都挑战赛将设定一个完整命题，策划不同活动形式，邀请挑战者以 AI 为核心工具和方法完成内容创作。</p>

      <p>首届AI艺术节（AIAF）将聚焦「图片」作品，设立评奖，与头部AI创作平台LiblibAI联合征集，并邀请人工智能技术领域以及艺术文化领域的优秀代表组成顾问评委团，从征集到的作品中共同筛选出最能体现人类使用
        AI 工具展现创意和人类精神的 100 幅作品，在线上陆续发布，并最终完成一次线下展览。</p>

      <p>AIAF的建立，是希望提供一个契机，激励更多有创造力的人加入 AI 创作中来，并且联合所有使用 AI
        作为工具的人，共同探索令人兴奋的新的内容和创意可能。</p>

      <p>
        这是我们站在新时代路口所做的一次微小努力，是一次对人类创造力的极致致敬。我们所期待的，是这一行动得以持续开放、持续发生，持续让共生于当下的更多创作者加入其中，与变化的浪潮共存。</p>

      <p>AIAF 第一届 AI 艺术节</p>

      <strong>组委会主席：</strong>张伟<br/>
      <strong>发起人：</strong>杨远骋<br/>
      <strong>执行总监：</strong>郭蓉<br/>
      <strong>内容统筹：</strong>梁珂<br/>
      <strong>合作统筹：</strong>钟平 刘海蒂<br/>
      <strong>产品设计：</strong>刘晔 王睿<br/>
      <strong>技术支持：</strong>元宇万相<br/>

      <p></p>
      <p></p>
    </div>
  </div>
</template>

<style scoped lang="scss">

@media (min-width: 768px) {
  .content-2 {
    .bg-side {
      position: absolute !important;
    }
  }
}

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
    text-align: justify;

    .bg2 {
      width: 40px;
      position: absolute;
      left: 17px;
      top: -35px;
    }

    p {
      margin-bottom: 30px;
    }

    strong {
      font-weight: 800;
    }
  }
}
</style>
