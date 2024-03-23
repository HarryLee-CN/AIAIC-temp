import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    isShowPageSignUp: false,
  }),
  getters: {
    getterIsShowPageSignUp(state) {
      return state.isShowPageSignUp
    },
  },
  actions: {
    updateIsShowPageSignUp(isShowPageSignUp) {
      this.isShowPageSignUp = isShowPageSignUp
    },
  }
})
