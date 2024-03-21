import {defineStore} from "pinia";

export const useBaseStore = defineStore("base", {
  state: () => ({
    initConfig: {
      "source": "",
      "source_title": "",
      "source_logo": "",
      "top_logo": {
        "url": "",
        "width": 0,
        "height": 0
      },
      "poster": {
        "qrcode": "https:\/\/static.thefair.net.cn\/gnsms\/qrcode\/default.jpg",
        "text": "扫码，或前往新世相公众号回复“晚安”报名",
        "bottom_logo": {
          "url": "https:\/\/static.thefair.net.cn\/gnsms\/bottom_logo\/default.png",
          "width": 123,
          "height": 13
        }
      },
    },
    registerInfo: {
      city: "某个地方",
      nick: "朋友",
    },
    source: ""
  }),
  getters: {
    getterInitConfig(state) {
      return state.initConfig
    },
    getterRegisterInfo(state) {
      return state.registerInfo
    },
    getterSource(state) {
      return state.source
    }
  },
  actions: {
    updateInitConfig(initConfig) {
      this.initConfig = initConfig
    },
    updateRegisterInfo(registerInfo) {
      this.registerInfo = registerInfo
    },
    updateSource(source) {
      this.source = source
    },
  }
})
