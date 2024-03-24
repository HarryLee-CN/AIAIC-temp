import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    isShowPageSignUp: false,
    isShowModalRegister: false,
  }),
  getters: {
    getterIsShowPageSignUp(state) {
      return state.isShowPageSignUp
    },
    getterIsShowModalRegister(state) {
      return state.isShowModalRegister
    },
  },
  actions: {
    updateIsShowPageSignUp(isShowPageSignUp) {
      this.isShowPageSignUp = isShowPageSignUp
    },
    updateIsShowModalRegister(isShowModalRegister) {
      this.isShowModalRegister = isShowModalRegister
    },
  }
})
