<template>
  <div id="fullpage">
    <div class="section">
      <div class="cover">
        <div class="titles">
          <!-- <img class="text-1" src="../../static/img/cover-text-1.png" alt="text1">
          <img class="text-2" src="../../static/img/cover-text-2.png" alt="text2"> -->
          <img class="text-logo" src="../../static/img/cover-text-logo.png" alt="text2">
        </div>
        <img class="logo" src="../../static/img/cover-logo.png" alt="logo">
        <!-- <div class="tips">下滑进入</div> -->
        <img class="icon-arrow-down" src="../../static/img/icon-arrow-down.svg" alt="down">
      </div>
    </div>
    <!-- 行动发起 -->
    <div class="section">
      <div class="content" ref="content-1">
        <content-1/>
      </div>
    </div>
    <!-- 关于 AIAIC -->
    <div class="section">
      <div class="content" ref="content-2">
        <content-2/>
      </div>
    </div>
    <!-- 创作征集、我的创作 -->
    <div class="section">
      <div class="content" ref="content-3">
        <content-3 v-if="!isLogin || (isLogin && !myWorks.length)"/>
        <content-3-my-works v-else/>
      </div>
    </div>
    <!-- 作品展示 -->
    <div class="section">
      <div class="content" ref="content-4">
        <content-4/>
      </div>
    </div>
    <!-- 合作支持 -->
    <div class="section">
      <div class="content" ref="content-5">
        <content-5/>
      </div>
    </div>
  </div>

  <div class="cells">
    <div class="cell cell-black" @click="handleClick(2)" ref="cell-1">
      <div class="left">
        <div class="title">行动发起</div>
        <div class="eng">Reasons for Action</div>
      </div>
      <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
    </div>
    <div class="cell cell" @click="handleClick(3)" ref="cell-2">
      <div class="left">
        <div class="title">关于 AIAF</div>
        <div class="eng">About AIAF</div>
      </div>
      <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
    </div>
    <div class="cell" @click="handleClick(4)" ref="cell-3">
      <div class="left" v-if="!isLogin || (isLogin && !myWorks.length)">
        <img class="icon" src="../../static/img/icon-call-for-work.svg" alt="call-for-work">
        <div class="title" style="color: #70C6F6 !important;">创作征集</div>
        <div class="eng">Call for Creative Submission</div>
      </div>
      <div class="left" v-else>
        <img class="icon" src="../../static/img/icon-call-for-work.svg" alt="call-for-work">
        <div class="title" style="color: #70C6F6 !important;">我的创作</div>
        <div class="eng">Creation</div>
      </div>
      <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
    </div>
    <div class="cell" @click="handleClick(5)" ref="cell-4">
      <div class="left">
        <div class="title">作品展示</div>
        <div class="eng">Innovative Art Exhibition</div>
      </div>
      <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
    </div>
    <div class="cell" @click="handleClick(6)" ref="cell-5">
      <div class="left">
        <div class="title">合作支持</div>
        <div class="eng">Collaborative Support</div>
      </div>
      <img class="arrow" src="../../static/img/icon-arrow.svg" alt="arrow">
    </div>
  </div>

  <page-submit/>

  <page-poster/>

  <modal-register/>

  <modal-swiper/>
</template>

<script>
import Content1 from "../../components/Content-1.vue";
import Content2 from "../../components/Content-2.vue";
import Content3 from "../../components/Content-3.vue";
import Content3MyWorks from "../../components/Content-3-MyWorks.vue";
import Content4 from "../../components/Content-4.vue";
import Content5 from "../../components/Content-5.vue";
import PageSubmit from "../../components/PageSubmit.vue";
import {useBaseStore} from "../../store/base";
import ModalRegister from "../../components/ModalRegister.vue";
import {activityAigcGetChosenCollectionFeedList, activityAigcGetUserCollectionFeedList} from "../../api/api";
import ModalSwiper from "../../components/ModalSwiper.vue";
import PagePoster from "../../components/PagePoster.vue";

export default {
  components: {
    PagePoster,
    ModalSwiper,
    ModalRegister,
    PageSubmit,
    Content1,
    Content2,
    Content3,
    Content3MyWorks,
    Content4,
    Content5
  },
  data() {
    return {
      // 上传过作品了
      hasWorks: true,
      fullPage: {}
    }
  },
  computed: {
    isLogin() {
      return useBaseStore().getterIsLogin
    },
    isShowPageSubmit() {
      return useBaseStore().getterIsShowPageSubmit
    },
    myWorks() {
      return useBaseStore().getterMyWorks
    }
  },
  methods: {
    handleClick(e) {
      this.fullPage.moveTo(e)
    },
    async getChosenData(last_item_id = "") {
      const res = await activityAigcGetChosenCollectionFeedList({last_item_id})
      const {item_list, last_item_id: new_last_item_id} = res.data.result
      useBaseStore().updateSelectedWorks(item_list)
      if (new_last_item_id) await this.getChosenData(new_last_item_id)
    },
    async getUserWorks(last_item_id = "") {
      const res = await activityAigcGetUserCollectionFeedList({last_item_id})
      const {item_list, last_item_id: new_last_item_id} = res.data.result
      useBaseStore().updateMyWorks(item_list)
      // if (new_last_item_id) await this.getUserWorks(new_last_item_id)
    },
    async getData() {
      useBaseStore().updateIsLogin(!!localStorage.getItem('uid'))
      console.log('[isLogin]', this.isLogin)
      console.log('[uid]', localStorage.getItem('uid'))

      await this.getChosenData()
      if (!this.isLogin) return
      await this.getUserWorks()
    },
    initUsersInterface() {
      const clientHeight = document.body.clientHeight

      this.$refs['content-1'].style = `padding-top: 56px;padding-bottom: 224px`
      this.$refs['content-2'].style = `padding-top: 56px;padding-bottom: 168px`
      this.$refs['content-3'].style = `padding-top: 56px;padding-bottom: 112px`
      this.$refs['content-4'].style = `padding-top: 56px;padding-bottom: 56px`
      this.$refs['content-5'].style = `padding-top: 56px;padding-bottom: 0`

      this.$refs['cell-1'].style = `top: ${clientHeight}px`;
      this.$refs['cell-2'].style = `top: ${clientHeight * 2 - 56 * 4}px`;
      this.$refs['cell-3'].style = `top: ${clientHeight * 2 - 56 * 3}px`;
      this.$refs['cell-4'].style = `top: ${clientHeight * 2 - 56 * 2}px`;
      this.$refs['cell-5'].style = `top: ${clientHeight * 2 - 56}px`;

      this.fullPage = new window.fullpage('#fullpage', {
        verticalCentered: false,
        autoScrolling: true,
        scrollHorizontally: true,
        scrollOverflow: true,
        scrollingSpeed: 500,
        onLeave: (origin, destination, direction, trigger) => {
          switch (destination.index) {
            case 0:
              this.$refs['cell-1'].style = `top: ${clientHeight}px`;
              this.$refs['cell-1'].classList = 'cell cell-black';

              this.$refs['cell-2'].style = `top: ${clientHeight * 2 - 56 * 4}px`;
              this.$refs['cell-2'].classList = 'cell first-cell-shadow';
              this.$refs['cell-3'].style = `top: ${clientHeight * 2 - 56 * 3}px`;
              this.$refs['cell-3'].classList = 'cell';
              this.$refs['cell-4'].style = `top: ${clientHeight * 2 - 56 * 2}px`;
              this.$refs['cell-4'].classList = 'cell';
              this.$refs['cell-5'].style = `top: ${clientHeight * 2 - 56}px`;
              this.$refs['cell-5'].classList = 'cell';
              break;
            case 1:
              this.$refs['cell-1'].style = 'top: 0';
              this.$refs['cell-1'].classList = 'cell cell-black';

              this.$refs['cell-2'].style = `top: ${clientHeight - 56 * 4}px`;
              this.$refs['cell-2'].classList = 'cell first-cell-shadow';
              this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
              this.$refs['cell-3'].classList = 'cell';
              this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
              this.$refs['cell-4'].classList = 'cell';
              this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
              this.$refs['cell-5'].classList = 'cell';
              break;
            case 2:
              this.$refs['cell-1'].style = 'top: -56px';
              this.$refs['cell-1'].classList = 'cell cell-black';
              this.$refs['cell-2'].style = `top: 0`;
              this.$refs['cell-2'].classList = 'cell cell-black';

              this.$refs['cell-3'].style = `top: ${clientHeight - 56 * 3}px`;
              this.$refs['cell-3'].classList = 'cell first-cell-shadow';
              this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
              this.$refs['cell-4'].classList = 'cell';
              this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
              this.$refs['cell-5'].classList = 'cell';
              break;
            case 3:
              this.$refs['cell-1'].style = 'top: -56px';
              this.$refs['cell-1'].classList = 'cell cell-black';
              this.$refs['cell-2'].style = `top: -56px`;
              this.$refs['cell-2'].classList = 'cell cell-black';
              this.$refs['cell-3'].style = `top: 0`;
              this.$refs['cell-3'].classList = 'cell cell-black';

              this.$refs['cell-4'].style = `top: ${clientHeight - 56 * 2}px`;
              this.$refs['cell-4'].classList = 'cell first-cell-shadow';
              this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
              this.$refs['cell-5'].classList = 'cell';
              break;
            case 4:
              this.$refs['cell-1'].style = 'top: -56px';
              this.$refs['cell-1'].classList = 'cell cell-black';
              this.$refs['cell-2'].style = `top: -56px`;
              this.$refs['cell-2'].classList = 'cell cell-black';
              this.$refs['cell-3'].style = `top: -56px`;
              this.$refs['cell-3'].classList = 'cell cell-black';
              this.$refs['cell-4'].style = `top: 0`;
              this.$refs['cell-4'].classList = 'cell cell-black';

              this.$refs['cell-5'].style = `top: ${clientHeight - 56}px`;
              this.$refs['cell-5'].classList = 'cell first-cell-shadow';
              break;
            case 5:
              this.$refs['cell-1'].style = 'top: -56px';
              this.$refs['cell-1'].classList = 'cell cell-black';
              this.$refs['cell-2'].style = `top: -56px`;
              this.$refs['cell-2'].classList = 'cell cell-black';
              this.$refs['cell-3'].style = `top: -56px`;
              this.$refs['cell-3'].classList = 'cell cell-black';
              this.$refs['cell-4'].style = `top: -56px`;
              this.$refs['cell-4'].classList = 'cell cell-black';
              this.$refs['cell-5'].style = `top: 0`;
              this.$refs['cell-5'].classList = 'cell cell-black';
              break;
          }
        },
      });
    }
  },
  mounted() {
    this.initUsersInterface()
    this.getData()
  },
  onLoad(query) {
  }
}
</script>

<style scoped lang="scss">

.cover {
  max-width: 768px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background: url("../../static/img/cover.png") center center no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .titles {
    padding-top: 8vh;
    display: flex;
    // justify-content: space-between;
    margin: 0 auto;

    .text-1 {
      width: 120px;
    }

    .text-2 {
      width: 145px;
    }

    .text-logo {
      width: 200px;
    }
  }

  .logo {
    width: 100%;
    padding: 0 15px 0 15px;
    position: absolute;
    bottom: 70px;
  }

  .tips {
    position: absolute;
    bottom: 69px;
    font-family: Source Han Serif CN;
    font-size: 18.4px;
    font-weight: 400;
    line-height: 26.44px;
    text-align: left;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-arrow-down {
    position: absolute;
    bottom: 50px;

    width: 26px;
    height: 12px;
    object-fit: contain;
    object-position: center center;

    -webkit-animation: up_and_down 1.5s ease-in-out infinite;
    -o-animation: up_and_down 1.5s ease-in-out infinite;
    animation: up_and_down 1.5s ease-in-out infinite;
  }

  @keyframes up_and_down {
    from {
      bottom: 50px;
    }
    50% {
      bottom: 30px;
    }
    to {
      bottom: 50px;
    }
  }
}

.cells {
  max-width: 768px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  pointer-events: none;

  .cell-black {
    box-shadow: 0px 2px 11px 0px #00000045 !important;
    background: #3f3f3f !important;

    .title {
      color: #FFFFFF !important;
    }

    .eng {
      opacity: 0.19;
    }
  }

  .cell {
    max-width: 768px;
    pointer-events: auto;
    width: 100%;
    height: 56px;
    background: #FFFFFF;

    border-bottom: 0.5px #191919 solid;

    position: fixed;
    transition: all 300ms ease-in-out;

    display: flex;
    justify-content: space-between;
    padding: 16px 16px 0 29px;

    .left {
      display: flex;

      .icon {
        width: 15px;
        height: 15px;
        position: absolute;
        left: 8px;
        top: 20px;
      }
    }

    .title {
      font-family: Source Han Serif CN;
      font-size: 16.59px;
      font-weight: 500;
      line-height: 23.84px;
      letter-spacing: -0.6635649800300598px;
      text-align: left;

      color: #191919;
      transition: all 300ms ease-in-out;
    }

    .eng {
      margin-left: 15px;

      font-family: Source Han Serif CN;
      font-size: 16.59px;
      font-weight: 400;
      line-height: 23.84px;
      letter-spacing: -0.6635649800300598px;
      text-align: left;

      color: #DEDEDE;
      transition: all 300ms ease-in-out;
    }

    .arrow {
      margin-top: -6px;
      width: 28px;
    }
  }

  .first-cell-shadow {
    box-shadow: 0px -2px 8px 0px #0000001B;
  }
}

.content {
  max-width: 768px;
  margin: 0 auto;
}
</style>
