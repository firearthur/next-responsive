export const FONT_WEIGHT = {
  light: 300,
  normal: 400,
  semiBold: 600,
  bold: 700,
};

export const LINE_HEIGHTS = {
  normal: '1rem',
  veryHigh: '5.6rem',
};

/**
 * Here is where style guide fonts would go
 */
export default {
  fontFamily: 'Open Sans, Helvetica, sans-serif',
  navLink: {
    fontWeight: FONT_WEIGHT.semiBold,
    fontSize: '1rem',
    lineHeight: LINE_HEIGHTS.normal,
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  hero: {
    fontWeight: FONT_WEIGHT.semiBold,
    fontSize: '4.5rem',
    lineHeight: LINE_HEIGHTS.veryHigh,
  },
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: FONT_WEIGHT.normal,
    fontSize: '1rem',
    lineHeight: LINE_HEIGHTS.normal,
  },
};
