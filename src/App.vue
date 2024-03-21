<script>
import {activityGnsmsInitConfig} from "./api/api";
import {useBaseStore} from "./store/base";

export default {
  data() {
    return {
      query: {},
      path: ""
    }
  },
  onLaunch(e) {
    console.log("onLaunch", e)
    this.query = e.query
    this.path = e.path
    const baseStore = useBaseStore()
    baseStore.updateSource(this.query.__s || "")
    console.log("baseStore", baseStore)
    activityGnsmsInitConfig().then(res => {
      console.log(res.data.result)
      const {
        poster,
        source, // wyyyy
        source_display_name,
        source_logo, // url
        source_title, // 独家音乐支持平台
        status, // normal success 截至 finish 满员
        top_logo,
      } = res.data.result
      baseStore.updateInitConfig({
        poster,
        source, // wyyyy
        source_display_name,
        source_logo,
        source_title,
        status, // normal success 截止 finish 满员
        top_logo,
      })
      console.log("status", status)
      switch (status) {
        case "normal":
          if (this.path !== "pages/index/index") {
            uni.redirectTo({
              url: "/pages/index/index?__s=" + (this.query.__s || "")
            })
          }
          break;
        case "success":
          if (this.path !== "pages/error/index") {
            uni.redirectTo({
              url: "/pages/error/index?type=full&__s=" + (this.query.__s || "")
            })
          }
          break;
        case "finish":
          if (this.path !== "pages/error/index") {
            uni.redirectTo({
              url: "/pages/error/index?type=finished&__s=" + (this.query.__s || "")
            })
          }
          break;
      }
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
/* 隐藏所有页面的 navigationBar */
uni-page-head {
  display: none;
}
</style>
