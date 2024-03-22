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
  <div class="block" v-for="(item, index) in 4">
    <div class="top">
      <img :src="`https://static.thefair.net.cn/activity/AIAIC/display-img${index+1}.png`" alt="">
    </div>
    <div class="bottom">
      <div class="desc">超级马里奥：惊奇了了两行文字</div>
      <div class="desc">Patrick</div>
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
  height: 100%;
  border: 1px red solid;

  .block {
    border: 1px red solid;
    width: 100%;

    .top {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
