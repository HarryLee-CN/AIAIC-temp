<script>
import {useBaseStore} from "../store/base";
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Content-3-MyWorks",
  computed: {
    myWorks() {
      return useBaseStore().getterMyWorks
    }
  },
  methods: {
    handleSubmitAgain() {
      useBaseStore().updateIsShowPageSubmit(true)
    },
    handlePoster(item) {
      useBaseStore().updateIsShowPagePoster(true)
      useBaseStore().updatePosterContent(item)
    }
  }
})
</script>

<template>
  <div class="content-3-my-works">
    <img class="bg-side" src="../static/img/bg-call-for-works-1.png" alt="bg">
    <div class="block" v-for="(item, index) in myWorks" :key="index">
      <div class="title">
        <div class="left">
          <div class="decoration"/>
          《<span class="title-text">{{ item.title }}</span>》
        </div>
        <div class="right" @click="handlePoster(item)">
          查看海报>
        </div>
      </div>
      <div class="works">
        <img :src="image" v-for="image in item.images" alt="work"/>
      </div>
    </div>
    <img class="submit-again" src="../static/img/btn-submit-again.png" alt="submit-again" @click="handleSubmitAgain">
  </div>
</template>

<style scoped lang="scss">

@media (min-width: 768px) {
  .content-3-my-works {
    .bg-side {
      position: absolute !important;
    }
  }
}

.content-3-my-works {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 573px;
  //padding-top: 21px;

  .bg-side {
    width: 25px;
    position: fixed;
    right: 0;
  }

  .block {
    width: 100%;

    &:nth-child(2) {
      margin-top: 21px;
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 37px;
      margin-bottom: 15px;

      .left {
        width: 70%;
        display: flex;
        align-items: center;

        //font-family: Source Han Serif CN;
        //font-size: 19.14px;
        //font-weight: 700;
        //line-height: 27.5px;
        //text-align: left;

        font-family: Source Han Serif CN;
        font-size: 16.59px;
        font-weight: 500;
        line-height: 23.84px;
        letter-spacing: -0.6635649800300598px;
        text-align: left;

        color: #191919;

        .decoration {
          width: 8px;
          height: 26px;
          background-color: #191919;
          margin-right: 19px;
        }

        .title-text {
          //单行
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
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

    .works {
      margin-bottom: 25px;
      padding: 0 36px;
      display: flex;
      flex-wrap: wrap;

      img {
        max-width: calc(650px / 2);
        max-height: calc(650px / 2);
        width: 40vw;
        height: 40vw;
        object-position: center center;
        object-fit: cover;
        margin-right: 5px;
        margin-bottom: 5px;

        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }

  .submit-again {
    width: 329px;
    margin: 5px auto 22px auto;
  }
}
</style>
