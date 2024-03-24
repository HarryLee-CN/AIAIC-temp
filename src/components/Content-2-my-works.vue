<script>
import {useBaseStore} from "../store/base";
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-2-My-Works",
  computed: {
    myWorks() {
      return useBaseStore().getterMyWorks
    }
  },
  methods: {
    handleSignUp() {
      useBaseStore().updateIsShowPageSignUp(true)
    }
  }
})
</script>

<template>
  <div class="content-2-my-works">
    <img class="bg" src="../static/img/bg-call-for-works-1.png" alt="bg">
    <div class="block" v-for="(item, index) in myWorks" :key="index">
      <div class="title">
        <div class="left">
          <div class="decoration"/>
          《{{ item.title }}》
        </div>
        <div class="right">
          查看海报>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.content-2-my-works {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 573px;

  .bg {
    width: 25px;
    height: 573px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .block {
    width: 100%;
    border: 1px red solid;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 37px;

      .left {
        display: flex;
        align-items: center;

        font-family: Source Han Serif CN;
        font-size: 19.14px;
        font-weight: 700;
        line-height: 27.5px;
        text-align: left;

        color: #191919;

        .decoration {
          width: 8px;
          height: 26px;
          background-color: #191919;
          margin-right: 19px;
        }
      }

      .right {
        font-family: Source Han Serif CN;
        font-size: 14.72px;
        font-weight: 400;
        line-height: 21.15px;
        text-align: left;

        color: #191919;
      }
    }
  }
}
</style>
