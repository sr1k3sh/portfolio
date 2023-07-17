export const debounce = (fn:any, delay = 300) => {
  let timeout:any = -1;

  return (...args:any[]) => {
    if (timeout !== -1) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(fn, delay, ...args);
  };
};

export const colors = {
  primary: '#C03221',
  primaryLight: '#FD5D63',
  primaryDark: '#650104',
  secondary: '#F2D0A4',
  secondaryLight: '#FFD270',
  secondaryDark: '#664600',
  fontWhite: '#ffffff',
  fontBlack: '#000000',
  fontDarkWhite: '#f4f4f4',
  fontDark: '#545E75',
  fontLight: '#437F97',
  tertinary: '#849324',
  white: '#F7F7FF',
}