export const debounce = (fn, delay = 300) => {
    let timeout = -1;

    return (...args) => {
      if (timeout !== -1) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(fn, delay, ...args);
    };
};