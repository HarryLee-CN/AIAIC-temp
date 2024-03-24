import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    isLogin: !!localStorage.getItem('uid'),
    userInfo: {},
    selectedWorks: [],
    isShowPageSubmit: false,
    isShowModalRegister: false,
    swiperItems: [],
    isShowModalSwiper: false,
    myWorks: [],
    isShowPagePoster: false,
    posterContent: {
      images: []
      // "title": "我的作品1",
      // "desc": "有描述",
      // "nick": "韭菜",
      // "images": [
      //   "https:\/\/static.thefair.net.cn\/activity\/collect\/ugc\/20240324\/1683bb3ee765ddd333d7364a70c725da.png?x-oss-process=image\/auto-orient,1\/resize,w_750\/format,jpg\/interlace,1\/quality,q_80",
      //   "https:\/\/static.thefair.net.cn\/activity\/collect\/ugc\/20240324\/e7e42c61ad614c3e5c866defbc0d8472.png?x-oss-process=image\/auto-orient,1\/resize,w_750\/format,jpg\/interlace,1\/quality,q_80"
      // ],
      // "poster_link": "xxx"
    }
  }),
  getters: {
    getterIsLogin(state) {
      return state.isLogin
    },
    getterUserInfo(state) {
      return state.userInfo
    },
    getterSelectedWorks(state) {
      return state.selectedWorks
    },
    getterIsShowPageSubmit(state) {
      return state.isShowPageSubmit
    },
    getterIsShowModalRegister(state) {
      return state.isShowModalRegister
    },
    getterSwiperItems(state) {
      return state.swiperItems
    },
    getterIsShowModalSwiper(state) {
      return state.isShowModalSwiper
    },
    getterMyWorks(state) {
      return state.myWorks
    },
    getterIsShowPagePoster(state) {
      return state.isShowPagePoster
    },
    getterPosterContent(state) {
      return state.posterContent
    },
  },
  actions: {
    updateUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    updateSelectedWorks(selectedWorks) {
      this.selectedWorks = selectedWorks
    },
    updateIsShowPageSubmit(isShowPageSubmit) {
      this.isShowPageSubmit = isShowPageSubmit
    },
    updateIsShowModalRegister(isShowModalRegister) {
      this.isShowModalRegister = isShowModalRegister
    },
    updateSwiperItems(swiperItems) {
      this.swiperItems = swiperItems
    },
    updateIsShowModalSwiper(isShowModalSwiper) {
      this.isShowModalSwiper = isShowModalSwiper
    },
    updateMyWorks(myWorks) {
      this.myWorks = myWorks
    },
    updateIsShowPagePoster(isShowPagePoster) {
      this.isShowPagePoster = isShowPagePoster
    },
    updatePosterContent(posterContent) {
      this.posterContent = posterContent
    },
  }
})
