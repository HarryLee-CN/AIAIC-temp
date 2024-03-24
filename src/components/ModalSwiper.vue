<script>
import {defineComponent} from 'vue'
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "ModalSwiper",
  computed: {
    isShowModalSwiper() {
      return useBaseStore().getterIsShowModalSwiper
    },
    swiperItems() {
      return useBaseStore().getterSwiperItems
    }
  }
})
</script>

<template>
  <div class="modal-swiper" v-if="isShowModalSwiper">
    12341234
  </div>
</template>

<style scoped lang="scss">
.modal-swiper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px red solid;
}
</style>
