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
