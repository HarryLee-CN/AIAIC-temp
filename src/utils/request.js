function handleResponse(resolve, reject, res) {
  switch (res.statusCode) {
    case 200:
      switch (res.data.code) {
        case "0":
          resolve(res)
          break;
        default:
          uni.showToast({
            title: res.data.message.text || `网络错误，请稍后重试(${res.errMsg})`,
            icon: "none"
          })
          console.error(res)
          reject(res)
          break;
      }
      break;
    default:
      console.error(res)
      reject(res)
      break;
  }
}

export function uniRequest(options) {
  return new Promise(async (resolve, reject) => {
    const {url, data, method} = options
    let host = ""
    if (!url.includes('http')) host = 'https://actapi.thefair.net.cn';
    /** 通过ajax获取数据 **/
    uni.request({
      url: host + url,
      data,
      header: {},
      method,
      withCredentials: true,
      success: (res) => {
        handleResponse(resolve, reject, res)
      },
      fail: res => {
        uni.showToast({
          title: `网络错误，请稍后重试 (${res.errMsg})`,
          icon: "none"
        })
        console.error(res)
        reject(res)
      }
    })
  })
}
