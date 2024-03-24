import {uniRequest} from "../utils/request";
import {config} from "../utils/config";

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
    data: {},
  })
}

// 我的作品
export function activityAigcGetUserCollectionFeedList() {
  return uniRequest({
    url: config.activityAigcGetUserCollectionFeedListPath,
    method: "post",
    data: {},
  })
}
