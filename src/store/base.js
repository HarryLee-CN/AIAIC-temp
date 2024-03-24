import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    userInfo: {},
    selectedWorks: [],
    isShowPageSignUp: false,
    isShowModalRegister: false,
    swiperItems: [],
    isShowModalSwiper: false,
    myWorks: []
  }),
  getters: {
    getterUserInfo(state) {
      return state.userInfo
    },
    getterSelectedWorks(state) {
      return state.selectedWorks
    },
    getterIsShowPageSignUp(state) {
      return state.isShowPageSignUp
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
    updateIsShowPageSignUp(isShowPageSignUp) {
      this.isShowPageSignUp = isShowPageSignUp
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
