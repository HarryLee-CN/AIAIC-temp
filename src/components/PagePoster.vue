<script>
import {defineComponent} from 'vue'
import HeaderNav from "./HeaderNav.vue";
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "PagePoster",
  components: {HeaderNav},
  data() {
    return {
      images: []
    }
  },
  computed: {
    isShowPagePoster() {
      return useBaseStore().getterIsShowPagePoster
    }
  }
})
</script>

<template>
  <div class="page-poster" v-if="isShowPagePoster">
    <header-nav/>
  </div>
</template>

<style scoped lang="scss">
.page-poster {
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
}
</style>
