export const theme = {
  colors: {
    menuColor: '#282f4b',
    bgColor: '#434f74',
    bgColor2: '#2f3755',
    white: '#ffffff',
  },
  fonts: {
    Circe: 'font-family: Circe',
  },
  paddings: {
    pcTop: '25px',
    pcSide: '50px',
  }
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

export const flexContainer = (justifyContent, alignItems, alignContent) => (`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
`
);

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
theme.flexContainer = flexContainer;

export default theme;
