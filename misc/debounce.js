function debounce(func, wait) {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.call(context, ...args);
    }, wait);
  };
}

function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // No need to check `if (timer)`, `clearTimeout(null)` is safe.
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
