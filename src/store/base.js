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
    myWorks: []
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
  }
})
