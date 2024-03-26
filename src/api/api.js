import {uniRequest} from "../utils/request";
import {config} from "../utils/config";

export function getTicketSignature() {
  return uniRequest({
    url: "https://api.thefair.net.cn/wechat/open/get_wechat_sign",
    method: "get",
    params: {
      app_label: "Subscribe",
      url: window.location.href
    }
  })
}

export function getOssToken({path}) {
  return uniRequest({
    url: "https://acth5.thefair.net.cn/v1/upload/image_sign",
    method: "get",
    params: {path}
  })
}

export function activityAigcSendSmsCode({mobile}) {
  return uniRequest({
    url: config.activityAigcSendSmsCodePath,
    method: "post",
    data: {
      mobile,
      country_code: 86,
      verify_type: "login"
    },
  })
}

export function v1UserLogin({encrypt_mobile, sms_code}) {
  return uniRequest({
    url: config.v1UserLoginPath,
    method: "post",
    data: {
      "login_method": "sms_code",
      "country_code": 86,
      "mobile": encrypt_mobile,
      sms_code
    },
  })
}

// 精选作品
export function activityAigcGetChosenCollectionFeedList() {
  return uniRequest({
    url: config.activityAigcGetChosenCollectionFeedListPath,
    method: "post",
    data: {"collection_id": 6475},
  })
}

// 我的作品
export function activityAigcGetUserCollectionFeedList() {
  return uniRequest({
    url: config.activityAigcGetUserCollectionFeedListPath,
    method: "post",
    data: {
      "collection_id": 6475,
      "uid": localStorage.getItem('uid'),
      "last_item_id": 1
    },
  })
}
