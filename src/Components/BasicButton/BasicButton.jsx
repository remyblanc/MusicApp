import React from 'react';
import styled from "styled-components";

import {theme, macbook, flexContainer, fontSize, gradient} from "../../lib/theme";

const DefaultButton = (props) => {
  return(
    <div className={props.className}>
      <button className="button" tabIndex="0" onClick={(e) => e.target.blur()}>{props.buttonText}</button>
      <div className="gradient" />
    </div>
  );
};

const BasicButton = styled(DefaultButton)`
  position:relative;
  
  .gradient, .gradient:after {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 150px;
    height: 48px;
    border-radius: 4px;
    transition: 0.3s;
    opacity: 1;
    overflow: hidden;
    ${gradient('linear', 'to right', theme.colors.blue, theme.colors.lightBlue)}
  }
  
  .gradient:after {
    content: "";
    opacity: 0;
    ${gradient('linear', 'to right', theme.colors.blue+' 100%', theme.colors.lightBlue)}
  }
  
  .button {
    cursor: pointer;
    position: relative;
    z-index: 2;
    margin: auto;
    width: 150px;
    background: ${theme.colors.menuColor};
    padding: 17px 0 15px;
    border-radius: 4px;
    text-transform: uppercase;
    transition: 0.3s;
    ${theme.fonts.CirceBold}
    ${fontSize(16, 16)}
    background: transparent;
    
    &:focus {
      box-shadow: 0px 0px 10px ${theme.colors.menuShadow};
      outline: none;
    }
  }
  
  .button:hover + .gradient:after {
    opacity: 1;
    left: 0px;
  }
  
  
`;

export default BasicButton;