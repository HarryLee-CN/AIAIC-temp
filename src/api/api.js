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
