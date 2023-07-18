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
  primary: '#749578',
  primaryLight: '#FD5D63',
  primaryDark: '#650104',
  secondary: '#d8c1b4',
  secondaryLight: '#FFD270',
  secondaryDark: '#664600',
  fontWhite: '#ffffff',
  fontBlack: '#000000',
  fontDarkWhite: '#f4f4f4',
  fontDark: '#1d2134',
  fontLight: '#437F97',
  tertinary: '#849324',
  white: '#F7F7FF',
}