<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-4"
})
</script>

<template>
  <div class="content-4">
    <img class="bg" src="../static/img/bg-counselor.png" alt="bg">
    <div class="swiper">
      <div class="swiper-item" v-for="(item, index) in 4">
        <img src="../static/img/counselor.png" alt="counselor">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-4 {
  height: calc(100vh - 56px * 2);
  position: relative;
  display: flex;

  .bg {
    width: 110px;
    position: absolute;
    left: 0;
    height: 100%;
    z-index: -1;
  }

  .swiper {
    width: 100%;
    height: 390px;
    margin-top: 125.5px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    overflow-x: scroll;

    .swiper-item {
      display: flex;
      margin-right: 29px;

      img {
        width: 284px;
        height: 390px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
