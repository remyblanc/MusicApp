import React from 'react';
import styled from "styled-components";

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

const DefaultInput = (props) => {
  return(
    <div className={props.className}>
      <input
        type={props.type}
        data-value=""
        onChange={(e) => e.target.setAttribute('data-value', e.target.value)}
        onKeyUp={(e) => e.target.setAttribute('data-value', e.target.value)}
      />
      <label>
        <span className="material-icons">{props.icon}</span>
        <span>{props.placeHolder}</span>
      </label>
    </div>
  );
};

const BasicInput = styled(DefaultInput)`
  position: relative;
  background: ${theme.colors.menuColor};
  border-radius: 4px;
  
  label {
    position: absolute;
    z-index: 1;
    transition: 0.3s;
    top: 0px;
    left: calc(${theme.paddings.inputContainerSide});
    top: calc(${theme.paddings.inputTop});
    ${flexContainer('center','center','center')}
    
    & span:not(.material-icons) {
      margin: 6px 0px 0px 5px;
    }
  }
  
  input[type=text], input[type=password] {
    padding: ${theme.paddings.inputTop} ${theme.paddings.inputSide};
    background: transparent;
    ${theme.fonts.CirceLight}
    ${fontSize(16, 24)}
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    top: 0px;
    transition: 0.3s;
    border: 1px solid ${theme.colors.menuColor};
    border-radius: 4px;
    
    &:focus {
      box-shadow: 0px 0px 30px ${theme.colors.menuShadow};
    }
    
    &:focus + label span:not(.material-icons), &:not([data-value=""]) + label span:not(.material-icons) {
      opacity: 0;
    }
  }
  
  input[type=password] {
    ${fontSize(24, 0)}
  }
`;

export default BasicInput;