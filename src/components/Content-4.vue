<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-4"
})
</script>

<template>
  <div class="content-4">
    <div class="swiper">
      <div class="swiper-item" v-for="(item, index) in 4">
        <img src="../static/img/counselor.png" alt="counselor">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-4 {

  .swiper {
    margin-top: 125.5px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    width: fit-content;

    .swiper-item {
      display: flex;
      margin-right: 29px;

      img {
        width: 284px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
