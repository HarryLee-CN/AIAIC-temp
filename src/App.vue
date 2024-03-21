<script>
export default {
  data() {
    return {
      query: {},
      path: ""
    }
  },
  onLaunch(e) {
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
