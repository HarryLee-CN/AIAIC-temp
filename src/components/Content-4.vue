<script>
import {defineComponent} from 'vue'
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "Content-4",
  computed: {
    selectedWorks() {
      return useBaseStore().getterSelectedWorks
    }
  },
  methods: {
    handleClick(images) {
      useBaseStore().updateSwiperItems(images)
      useBaseStore().updateIsShowModalSwiper(true)
    }
  }
})
</script>

<template>
  <div class="content-4">
    <div class="block" v-for="(item, index) in selectedWorks" @click="handleClick(item.images)" :key="index">
      <div class="top">
        <img :src="item.images[0]" alt="">
      </div>
      <div class="bottom">
        <div class="desc">{{ item.title }}</div>
        <div class="name">{{ item.nick }}</div>
        <img class="next" src="../static/img/icon-arrow-next.png" alt="arrow">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-4 {
  padding: 10px 6px;

  column-count: 2;
  column-gap: 5px;

  .block {
    height: fit-content;
    padding-bottom: 4px;
    break-inside: avoid;
    page-break-inside: avoid;

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

        width: 85%;
        //单行
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 1;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .next {
        position: absolute;
        width: 26px;
        height: 26px;
        right: 10px;
        bottom: 19px;
      }
    }
  }
}
</style>
