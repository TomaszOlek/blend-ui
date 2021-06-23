/*
export const baseSizes = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  "128": "32rem",
};
*/

export const baseSizes = {
  px: "1px",
  1: "0.0625rem",
  2: "0.125rem",
  3: "0.1875rem",
  4: "0.25rem",
  5: "0.3125rem",
  6: "0.375rem",
  6.5:"0.406rem",
  7: "0.4375rem",
  8: "0.5rem",
  8.5: "0.5313rem",
  9: "0.5625rem",
  9.5:"0.594rem",
  10: "0.625rem",
  11: "0.6875rem",
  11.5:"0.719rem",
  12: "0.75rem",
  13: "0.8125rem",
  14: "0.875rem",
  15: "0.9375rem",
  16: "1rem",
  17: "1.0625rem",
  18: "1.125rem",
  20: "1.25rem",
  22: "1.375rem",
  24: "1.5rem",
  25: "1.5625rem",
  26: "1.625rem",
  28: "1.75rem",
  29: "1.8125rem",
  30: "1.875rem",
  31: "1.9375rem",
  32: "2rem",
  33: "2.0625rem",
  34: "2.125rem",
  36: "2.25rem",
  38: "2.375rem",
  40: "2.5rem",
  42: "2.625rem",
  48: "3rem",
  50: "3.125rem",
  60: "3.75rem",
  64: "4rem",
  70: "4.375rem",
  72: "4.5rem",

  80: "5rem",
  84:"5.25rem",
  90: "5.625rem",
  100: "6.25rem",
  128: "8rem",
  129: "8.0625rem",
  131: "8.1875rem",
  134:"8.375rem",
};

const largeSizes = {
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
};

const containers = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const borderWidths = {
  xl: "2rem",
  lg: "1rem",
  md: "0.5rem",
  sm: "0.25rem",
  xs: "0.125rem",
  "2xs": "0.0625rem",
  none: 0,
};

const buttonSizes = {
  xs: {
    fontSize: baseSizes[12],
  },
  sm: {
    fontSize: baseSizes[14],
  },
  md: {
    fontSize: baseSizes[12],
  },
  lg: {
    fontSize: baseSizes[16],
  },
  xl: {
    fontSize: baseSizes[18],
  },
};
const componentSizes = {
  xs: {
    height: baseSizes[12],
  },
  sm: {
    height: baseSizes[14],
  },
  md: {
    height: baseSizes[16],
  },
  lg: {
    height: baseSizes[18],
  },
  xl: {
    height: baseSizes[18],
  },
  base: {
    height: baseSizes[33],
  },
};

const modalSizes = {
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
};

const avatarSizes = {
  small: {
    fontSize: baseSizes[10],
  },
  medium: {
    fontSize: baseSizes[12],
  },
  large: {
    fontSize: baseSizes[14],
  },
  xxl: {
    fontSize: baseSizes[16],
  },
  xl: {
    fontSize: baseSizes[18],
  },
};

const sizes = {
  ...baseSizes,
  ...largeSizes,
  containers,
  borderWidths,
  buttonSizes,
  componentSizes,
  modalSizes,
  avatarSizes,
};

export default sizes;
