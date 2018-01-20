export const theme = {
  colors: {
    menuColor: '#282f4b',
    menuColorRgba: 'rgba(40,47,75, 0.5)',
    menuShadow: '#55608f',
    bgColorLighter: '#434f74',
    bgColorDarker: '#2f3755',
    lightBlue: '#46a9f3',
    blue: '#136bec',
    white: '#ffffff',
    red: '#ff000a',
    green: '#00ff00'
  },
  fonts: {
    TitilliumWebThin: `
      font-family: TitilliumWeb;
      font-weight: 100;
    `,
    TitilliumWebLight: `
      font-family: TitilliumWeb;
      font-weight: 300;
    `,
    TitilliumWebRegular: `
      font-family: TitilliumWeb;
      font-weight: 400;
    `,
    TitilliumWebBold: `
      font-family: TitilliumWeb;
      font-weight: 600;
    `,
  },
  paddings: {
    pcTop: '25px',
    pcSide: '50px',
    inputTop: '15px',
    inputSide: '45px',
    inputLabelTop: '16px',
    inputLabelSide: '15px',
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

export const gradient = (gradType, gradDirection, gradStart, gradEnd) => (`
  background: ${gradType}-gradient(${gradType === 'linear' ? gradDirection+',' : ''} ${gradStart}, ${gradEnd});
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
theme.flexContainer = flexContainer;
theme.gradient = gradient;

export default theme;
