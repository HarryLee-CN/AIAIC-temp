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
