/** 微信初始化等等 **/
import wx from "weixin-js-sdk";
import { getTicketSignature } from "../api/api";

export const updateWxShareData = (share_info) => {
  wx.ready(function () {
    wx.updateAppMessageShareData({
      //需在用户可能点击分享按钮前就先调用
      title: share_info.title, // 分享标题
      desc: share_info.text, // 分享描述
      link: share_info.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: share_info.image.url, // 分享图标
    });
    wx.updateTimelineShareData({
      //需在用户可能点击分享按钮前就先调用
      title: share_info.title, // 分享标题
      link: share_info.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: share_info.image.url, // 分享图标
    });
  });
};
export const wxShareInit = async () => {
  try {
      const res = await getTicketSignature();
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.result.appId, // 必填，公众号的唯一标识
        timestamp: res.data.result.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.result.nonceStr, // 必填，生成签名的随机串
        signature: res.data.result.signature, // 必填，签名
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的JS接口列表
      });
      const DEFAULT_SHARE_INFO = {
        image: {
          img_info: {
            height: "",
            scale: "",
            width: "",
          },
          url: "https://static.thefair.net.cn/activity/aiaic/share.png",
        },
        link: window.location.href,
        text: "在科技发展过程中，探索「人类精神」的不可替代性",
        title: "新世相「爱恨情仇」AI影像创作计划",
      };
      updateWxShareData(DEFAULT_SHARE_INFO);
      wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        console.error(res);
      });
  } catch (e) {
    console.log(e);
  }
};
