import React from 'react';
import styled from "styled-components";

import {theme, macbook, flexContainer, fontSize, gradient} from "../../lib/theme";

const DefaultButton = (props) => {
  return(
    <div className={props.className}>
      <button>{props.buttonText}</button>
    </div>
  );
};

const BasicButton = styled(DefaultButton)`
  button {
    width: 150px;
    background: ${theme.colors.menuColor};
    height: 50px;
    border-radius: 4px;
    text-transform: uppercase;
    transition: 0.3s;
    ${theme.fonts.CirceBold}
    ${fontSize(16, 24)}
    ${gradient('linear', 'to right', theme.colors.blue, theme.colors.lightBlue)}
    
    &:hover {
      ${gradient('linear', 'to right', theme.colors.blue+' 100%', theme.colors.lightBlue)}
    }
  }
`;

export default BasicButton;