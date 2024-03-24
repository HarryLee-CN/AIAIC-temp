import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    userInfo: {},
    isShowPageSignUp: false,
    isShowModalRegister: false,
  }),
  getters: {
    getterUserInfo(state) {
      return state.userInfo
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
    updateIsShowPageSignUp(isShowPageSignUp) {
      this.isShowPageSignUp = isShowPageSignUp
    },
    updateIsShowModalRegister(isShowModalRegister) {
      this.isShowModalRegister = isShowModalRegister
    },
  }
})
