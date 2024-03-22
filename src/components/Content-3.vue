<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-3",
  data() {
    return {
      list: []
    }
  }
})
</script>

<template>
  <div class="content-3">
    <div class="block" v-for="(item, index) in 6">
      <div class="top">
        <img :src="`https://static.thefair.net.cn/activity/AIAIC/display-img${index+1}.png`" alt="">
      </div>
      <div class="bottom">
        <div class="desc">{{index}}超级马里奥：惊奇了了两行文字 超级马里奥：惊奇了了两行文字</div>
        <div class="name">Patrick</div>
        <img class="next" src="../static/img/icon-arrow-next.svg" alt="arrow">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-3 {
  padding: 10px 6px;

  column-count: 2;
  column-gap: 5px;

  //display: flex;
  //flex-direction: column;
  //flex-wrap: wrap;
  //justify-content: flex-start;

  //.block:nth-child(2n+1){
  //  order: 1;
  //  margin-left: 0;
  //}
  //.block:nth-child(2n+2){
  //  order: 2;
  //}

  .block {
    //margin-left: 5px;
    //width: 49.3%;
    height: fit-content;
    padding-bottom: 4px;
    display: flex;
    flex-direction: column;

    .top {
      width: 100%;
      display: flex;

      img {
        width: 100%;
      }
    }

    .bottom {
      padding: 11px 9px 18px 9px;
      position: relative;
      background-color: rgba(216, 216, 216, 0.36);

      .desc {
        font-family: Source Han Serif CN;
        font-size: 16.59px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
        // 两行时 超出不换行自动省略号
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: anywhere;
      }

      .name {
        font-family: Source Han Serif CN;
        font-size: 13.77px;
        font-weight: 400;
        line-height: 17.43px;
        text-align: left;

        color: #8a8a8a;

        margin-top: 29px;
      }

      .next {
        position: absolute;
        right: 10px;
        bottom: 19px;
      }
    }
  }
}
</style>
