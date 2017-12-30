export const theme = {
  colors: {
    gray: '#4c4c4c',
    darkGray: '#474747',
    darkGrayHover: '#3e3e3e',
    lightGray: '#9e9e9e',
    darkestGray: '#343434',
    white: '#ffffff',
  },
  fonts: {
    Ubuntu: 'font-family: Ubuntu',
  },
};

theme.layout = {
  pc: {
    respondTo: `(min-width: 1370px)`,
  },
  notebook: {
    respondTo: `(max-width: 1368px)`,
  },
  macbook: {
    respondTo: `(max-width: 1280px)`,
  },
  tablet: {
    respondTo: `(max-width: 1024px)`,
  },
  mobile: {
    respondTo: `(max-width: 760px)`,
  },

};


export const fontSize = (fontWeight, fontSize, lineHeight) => (`
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  line-height: ${lineHeight ? `${lineHeight}px` : '1.1'};
`);

export const respondTo = (size, style) => `@media only screen and ${theme.layout[size].respondTo} {
  ${style}
}`;

export const pc = style => respondTo('pc', style);
export const notebook = style => respondTo('notebook', style);
export const macbook = style => respondTo('macbook', style);
export const tablet = style => respondTo('tablet', style);
export const mobile = style => respondTo('mobile', style);

theme.respondTo = respondTo;
theme.fontSize = fontSize;

export default theme;
