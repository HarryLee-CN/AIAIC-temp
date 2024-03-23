<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index",
  data() {
    return {
      images: [
        "https://static-thefair-bj.oss-cn-beijing.aliyuncs.com/activity/jnby/631709876716_.pic.jpg",
        "https://static-thefair-bj.oss-cn-beijing.aliyuncs.com/activity/jnby/631709876716_.pic.jpg",
        "https://static-thefair-bj.oss-cn-beijing.aliyuncs.com/activity/jnby/631709876716_.pic.jpg",
        "https://static-thefair-bj.oss-cn-beijing.aliyuncs.com/activity/jnby/631709876716_.pic.jpg",
      ]
    }
  }
})
</script>

<template>
  <div class="sign-up">
    <div class="header">
      <img src="../../static/img/header-introduction.png" alt="header">
    </div>
    <div class="divider"/>

    <div class="block">
      <div class="title">*上传图片</div>
      <div class="desc">
        支持jpg、jpeg、png格式
        <br>
        最多上传4张图片
      </div>
      <div class="images">
        <div class="image" v-for="(item, index) in images" :key="index">
          <img class="icon-delete" src="../../static/img/icon-delete.svg" alt="delete">
          <img class="work" :src="item" alt="img">
        </div>
        <div class="uploader" v-if="false">
          <img src="../../static/img/icon-image-uploader.png" alt="uploader">
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">*作品名称（必填）</div>
      <input type="text" placeholder="在此处输入你的作品名称">
    </div>

    <div class="block">
      <div class="title">*作品描述（选填）</div>
      <textarea placeholder="在此处输入你的作品描述，140字以内"></textarea>
    </div>

    <div class="block">
      <div class="title">*你的昵称（必填）</div>
      <input type="text" placeholder="在此处输入你的昵称">
    </div>

    <div class="block">
      <div class="title">*手机号码（必填）</div>
      <input type="text" placeholder="请输入您的手机号码，以便我们与你联系">
    </div>

    <img class="btn" src="../../static/img/btn-submit.png" alt="submit">
  </div>
</template>

<style scoped lang="scss">
.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  .header {
    img {
      width: 360px;
    }
  }

  .divider {
    width: 350px;
    height: .5px;
    background-color: #1C1C1C;
    margin-top: 37.2px;
    margin-bottom: 33px;
  }

  .block {
    width: 350px;
    border: 1px red solid;
    margin-bottom: 43px;

    .title {
      font-family: Source Han Serif CN;
      font-size: 19.87px;
      font-weight: 300;
      line-height: 28.56px;
      text-align: left;

      color: #191919
    }

    .desc {
      font-family: Source Han Serif CN;
      font-size: 16.87px;
      font-weight: 300;
      line-height: 24.25px;
      text-align: left;

      color: #9D9D9D;

      margin-top: 13px;
    }

    .images {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;

      .image {
        display: flex;
        position: relative;

        margin-bottom: 13px;
        margin-right: 13px;

        .work {
          width: 166.74px;
          height: 166.5px;
          border-radius: 7px;
        }

        .icon-delete {
          position: absolute;
          top: 0;
          right: 0;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      .uploader {
        display: flex;

        img {
          width: 166.74px;
          height: 166.5px;
          border-radius: 7px;
        }
      }
    }

    input {
    }

    textarea {
    }
  }

  .btn {
    width: 329px;
  }
}
</style>
