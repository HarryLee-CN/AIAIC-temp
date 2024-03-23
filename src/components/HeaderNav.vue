<script>
import {defineComponent} from 'vue'
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "HeaderNav",
  methods: {
    back() {
      useBaseStore().updateIsShowPageSignUp(false)
    }
  }
})
</script>

<template>
  <div class="header-nav">
    <u-icon name="arrow-left" size="25" @click="back"></u-icon>
  </div>
</template>

<style scoped lang="scss">
.header-nav {
  width: 100%;
  height: 50px;
  border-bottom: 0.5px #1C1C1C solid;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;
}
</style>
