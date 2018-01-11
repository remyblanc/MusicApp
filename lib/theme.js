export const theme = {
  colors: {
    menuColor: '#282f4b',
    menuShadow: '#55608f',
    bgColor: '#434f74',
    bgColor2: '#2f3755',
    white: '#ffffff',
  },
  fonts: {
    CirceLight: `
      font-family: Circe;
      font-weight: 300;
    `,
    CirceRegular: `
      font-family: Circe;
      font-weight: 400;
    `,
    CirceBold: `
      font-family: Circe;
      font-weight: 600;
    `,
  },
  paddings: {
    pcTop: '25px',
    pcSide: '50px',
    inputTop: '15px',
    inputSide: '45px',
    inputContainerSide: '15px',
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


export const fontSize = (fontSize, lineHeight) => (`
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
