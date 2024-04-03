<script>
import {defineComponent} from 'vue'
import HeaderNav from "./HeaderNav.vue";
import {useBaseStore} from "../store/base";
import {activityAigcGetUserCollectionFeedList, getOssToken} from "../api/api";
import {imgUpload, phoneNumValid} from "../utils/common";

export default defineComponent({
  name: "PageSubmit",
  components: {HeaderNav},
  data() {
    return {
      images: [],
      workName: "",
      workDesc: "",
      nickname: "",
      mobile: "",
    }
  },
  computed: {
    isShowPageSubmit() {
      return useBaseStore().getterIsShowPageSubmit
    }
  },
  watch: {
    isShowPageSubmit(newV, oldV) {
      if (newV === false && oldV === true) {
        this.resetData();
      }
    },
  },
  methods: {
    resetData() {
      this.images = []
      this.workName = ""
      this.workDesc = ""
      this.nickname = ""
      this.mobile = ""
    },
    // 图片上传
    handleUpload() {
      uni.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: async (chooseImageRes) => {
          const tempFiles = chooseImageRes.tempFiles
          let res = await getOssToken({path: 'activity/collect/ugc/'});
          const resGetOssToken = res.data.result;
          let uploadResult = await imgUpload(resGetOssToken, tempFiles[0]);
          if (uploadResult.statusCode === 200) {
            if (this.images.length < 4) {
              this.images.push(resGetOssToken.url)
            }
          }
        }
      });
    },
    handleDelete(index) {
      this.images = this.images.filter((v, k) => k !== index)
    },
    handleSubmit() {
      if (this.images.length === 0) return uni.showToast({icon: "none", title: "请上传至少一幅作品"})
      if (!this.workName) return uni.showToast({icon: "none", title: "请输入作品名称"})
      if (!this.workDesc) return uni.showToast({icon: "none", title: "请输入作品描述"})
      if (!this.nickname) return uni.showToast({icon: "none", title: "请输入您的昵称"})
      if (!this.mobile) return uni.showToast({icon: "none", title: "请输入您的手机号"})
      if (!phoneNumValid(this.mobile)) return uni.showToast({icon: "none", title: "请输入正确的手机号"})
      uni.showLoading()
      uni.uploadFile({
        url: `https://acth5.thefair.net.cn/api?_ajax_stamp_=${new Date().getTime()}`,
        formData: {
          path: "/v1/collect/create_collect",
          params: JSON.stringify({
            "collection_id": "6475",
            "content_type": "questionaires",
            "content": [
              {
                "guide_id": "485373384205237932",
                "text": this.images// 作品

              },
              {
                "guide_id": "485373384205237933", // 名称
                "text": this.workName
              },
              {
                "guide_id": "485373384205237934", // 描述
                "text": this.workDesc
              },
              {
                "guide_id": "485373384205237935",
                "text": this.nickname // 昵称
              },
              {
                "guide_id": "485373384205237936", // 手机号
                "text": this.mobile
              }
            ]
          })
        },
        success: async (uploadFileRes) => {
          uni.hideLoading()
          console.log(uploadFileRes)
          uni.showToast({icon: "none", title: "提交成功"})
          // 获取我的创作
          const resMine = await activityAigcGetUserCollectionFeedList()
          useBaseStore().updateMyWorks(resMine.data.result.item_list)
          setTimeout(() => {
            // 关闭提交页
            useBaseStore().updateIsShowPageSubmit(false)
            // 设为最后一个作品是海报内容
            useBaseStore().updatePosterContent(resMine.data.result.item_list[resMine.data.result.item_list.length - 1])
            // 打开海报页
            useBaseStore().updateIsShowPagePoster(true)
          }, 1500)
        },
        fail: (e) => {
          uni.hideLoading()
          uni.showToast({icon: "none", title: "发生错误，请重试"})
        }
      })
    }
  },
})
</script>

<template>
  <div class="page-submit" v-if="isShowPageSubmit">
    <header-nav/>
    <div class="header">
      <img src="../static/img/header-introduction.png" alt="header">
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
          <img class="icon-delete" src="../static/img/icon-delete.svg" alt="delete" @click="handleDelete(index)">
          <img class="work" :src="item" alt="img">
        </div>
        <div class="uploader" v-if="images.length < 4" @click="handleUpload">
          <img src="../static/img/icon-image-uploader.png" alt="uploader">
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">*作品名称（必填）</div>
      <input type="text" placeholder="在此处输入你的作品名称" placeholder-style="color: #989898" v-model="workName">
    </div>

    <div class="block">
      <div class="title">*作品描述（必填）</div>
      <textarea placeholder="请注明使用的AI工具，并简短描述作品创作思路、关键词等信息。" placeholder-style="color: #989898" v-model="workDesc" maxlength="999"></textarea>
    </div>

    <div class="block">
      <div class="title">*你的昵称（必填）</div>
      <input type="text" placeholder="在此处输入你的昵称" placeholder-style="color: #989898" v-model="nickname">
    </div>

    <div class="block">
      <div class="title">*手机号码（必填）</div>
      <input type="tel" placeholder="请输入你的手机号码，以便我们与你联系" placeholder-style="color: #989898"
             v-model="mobile">
    </div>

    <img class="btn" src="../static/img/btn-submit.png" alt="submit" @click="handleSubmit">
  </div>
</template>

<style scoped lang="scss">
.page-submit {
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

  .header {
    img {
      width: 360px;
    }
  }

  .divider {
    width: 347.5px;
    height: .5px;
    background-color: #1C1C1C;
    margin-top: 37.2px;
    margin-bottom: 33px;
    flex-shrink: 0;
  }

  .block {
    width: 347.5px;
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
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;

      .image {
        display: flex;
        position: relative;

        margin-top: 13px;
        margin-right: 13px;

        &:nth-child(2n) {
          margin-right: 0;
        }

        .work {
          width: 166.74px;
          height: 166.5px;
          border-radius: 7px;
          object-fit: cover;
          object-position: center center;
        }

        .icon-delete {
          position: absolute;
          top: 0;
          right: 0;
        }
      }

      .uploader {
        display: flex;

        margin-top: 13px;

        img {
          width: 166.74px;
          height: 166.5px;
          border-radius: 7px;
        }
      }
    }

    input {
      width: 100%;
      border: 0.5px solid #979797;
      border-radius: 7px;
      padding: 0 12px;

      font-family: Source Han Serif CN;
      font-size: 17.25px;
      font-weight: 300;
      line-height: 24.79px;
      text-align: left;

      height: 53px;

      color: #4D4D4D;

      margin-top: 13px;
    }

    textarea {
      width: 100%;
      border: 0.5px solid #979797;
      border-radius: 7px;

      color: #4D4D4D;

      margin-top: 13px;

      font-family: Source Han Serif CN;
      font-size: 17.25px;
      font-weight: 300;
      line-height: 24.79px;
      text-align: left;

      height: 221px;
      padding: 12px;
    }
  }

  .btn {
    margin-right: 5px;
    width: 329px;
  }
}
</style>
