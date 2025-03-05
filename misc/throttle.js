function throttle(callback, wait) {
  let flag = true;
  return function (...args) {
    const context = this;
    if (flag) {
      callback.call(context, ...args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, wait);
  };
}

// Improved version

function throttle(callback, wait) {
  let flag = true,
    timer;

  return function (...args) {
    if (!flag) return;

    flag = false;
    callback.apply(this, args);

    timer = setTimeout(() => {
      flag = true;
    }, wait);
  };
}
