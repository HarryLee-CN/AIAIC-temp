<script>
import {defineComponent} from 'vue'
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "ModalSwiper",
  data() {
    return {
      current: 0
    }
  },
  computed: {
    isShowModalSwiper() {
      return useBaseStore().getterIsShowModalSwiper
    },
    swiperItems() {
      return useBaseStore().getterSwiperItems
    }
  },
  methods: {
    handleClose() {
      this.current = 0
      // 关闭
      useBaseStore().updateIsShowModalSwiper(false)
    },
    swipe(type) {
      if (type === 'left') {
        if (this.current === 0) {
          this.current = this.swiperItems.length - 1
        } else {
          this.current--
        }
      }
      if (type === 'right') {
        if (this.current === this.swiperItems.length - 1) {
          this.current = 0
        } else {
          this.current++
        }
      }
    }
  }
})
</script>

<template>
  <div class="modal-swiper" v-if="isShowModalSwiper" @click="handleClose">
    <div class="content">
      <img class="icon" src="../static/img/icon-arrow-left.svg" alt="left" @click.stop="swipe('left')" v-if="swiperItems.length !== 1">
      <img class="img" :src="swiperItems[current]" alt="img" @click.stop>
      <img class="icon" src="../static/img/icon-arrow-right.svg" alt="right" @click.stop="swipe('right')" v-if="swiperItems.length !== 1">
    </div>
    <img class="close" src="../static/img/icon-close.svg" alt="close" @click="handleClose">
  </div>
</template>

<style scoped lang="scss">
.modal-swiper {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.67);

  .content {
    width: 100%;

    padding: 0 23px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      width: calc(100vw - 13px * 2 - 23px * 2 - 15px * 2);
      border-radius: 7px;
      margin: 0 15px;
    }
  }

  .close {
    width: 30px;
    height: 30px;
    margin-top: 76px;
  }
}
</style>
