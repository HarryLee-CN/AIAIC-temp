import {uniRequest} from "../utils/request";
import {config} from "../utils/config";

export function activityGnsmsInitConfig() {
  return uniRequest({
    url: config.activityGnsmsInitConfigPath,
    method: "post",
    data: {},
  })
}

export function activityGnsmsSendSmsCode({mobile, country_code}) {
  return uniRequest({
    url: config.activityGnsmsSendSmsCodePath,
    method: "post",
    data: {mobile, country_code},
  })
}

export function activityGnsmsCheckCode({mobile, country_code, sms_code}) {
  return uniRequest({
    url: config.activityGnsmsCheckCodePath,
    method: "post",
    data: {mobile, country_code, sms_code},
  })
}

export function activityGnsmsCreateSmsUser({mobile, country_code, token, province, city, nick, content}) {
  return uniRequest({
    url: config.activityGnsmsCreateSmsUserPath,
    method: "post",
    data: {mobile, country_code, token, province, city, nick, content},
  })
}
