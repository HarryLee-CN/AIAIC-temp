export const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


// 倒计时
export function timeCountdown(time, callback) {
  callback(time);
  const timer = setInterval(() => {
    time--;
    callback(time);
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// 手机号校验  产品要求1开头的11位数字
export function phoneNumValid(phoneNumber) {
  const reg = /^1\d{10}$/;
  return reg.test(phoneNumber);
}

export function imgUpload(ossTokenData, file) {
  return new Promise((resolve) => {
    const host = ossTokenData.sign.host;
    const formData = new FormData();
    formData.append('key', ossTokenData.sign.dir + '/' + ossTokenData.file_name); //存储在oss的文件路径
    formData.append('OSSAccessKeyId', ossTokenData.sign.accessid); //accessKeyId
    formData.append('policy', ossTokenData.sign.policy); //policy
    formData.append('Signature', ossTokenData.sign.signature); //签名
    formData.append('success_action_status', 200); //成功后返回的操作码
    formData.append("file", file);
    /** 通过ajax获取数据 **/
    uni.request({
      url: host,
      data: formData,
      method: "post",
      withCredentials: true,
      success: (res) => {
        resolve(res)
      },
    })
  })
}
