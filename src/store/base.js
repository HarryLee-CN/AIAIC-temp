import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    userInfo: {},
    selectedWorks: [],
    isShowPageSignUp: false,
    isShowModalRegister: false,
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
  }
})
