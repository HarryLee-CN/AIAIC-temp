<script>
import {defineComponent} from 'vue'
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "HeaderNav",
  props: ["top"],
  methods: {
    back() {
      useBaseStore().updateIsShowPageSubmit(false)
      useBaseStore().updateIsShowPagePoster(false)
    }
  }
})
</script>

<template>
  <div class="header-nav" :style="{top: top}">
    <u-icon name="arrow-left" size="17" @click="back" color="black"></u-icon>
    <span @click="back">返回</span>
  </div>
</template>

<style scoped lang="scss">
.header-nav {
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 999;
  color: #000000;

  span {
    font-family: Source Han Serif CN;
    font-size: 17px;
    font-weight: 400;
    line-height: 24.43px;
    text-align: left;
    color: #000000;
  }
}
</style>
