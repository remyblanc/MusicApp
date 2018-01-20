import React from 'react';
import styled from "styled-components";

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

const DefaultInput = (props) => {
  return(
    <div className={props.className}>
      <input
        type={props.type}
        data-name={props.name}
        data-value=""
        onChange={(e) => e.target.setAttribute('data-value', e.target.value)}
        onClick={(e) => e.target.parentNode.classList.remove('error')}
      />
      <label>
        <span className="material-icons">{props.icon}</span>
        <span>{props.placeHolder}</span>
      </label>
    </div>
  );
};

const BasicInput = styled(DefaultInput)`
  transition: opacity 0.2s, height 0.4s, box-shadow 0.3s;
  position: relative;
  background: ${theme.colors.menuColor};
  border-radius: 4px;
  height: 56px;
  
  &.error {
    box-shadow: 0 0 0 1px ${theme.colors.red};
    animation: tremble 0.2s 2;  
  }
  
  &.success {
    box-shadow: 0 0 0 1px ${theme.colors.green};
  }
  
  label {
    position: absolute;
    z-index: 1;
    transition: 0.3s;
    left: calc(${theme.paddings.inputLabelSide});
    top: calc(${theme.paddings.inputTop});
    ${flexContainer('center','center','center')}
    
    & span:not(.material-icons) {
      margin: 6px 0 0 5px;
    }
  }
  
  input[type=text], input[type=password] {
    padding: 18px ${theme.paddings.inputSide} 15px;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    top: 0;
    transition: 0.3s;
    border-radius: 4px;
    
    &:focus {
      box-shadow: 0 0 30px ${theme.colors.menuShadow};
    }

    &:focus + label span:not(.material-icons), &:not([data-value=""]) + label span:not(.material-icons) {
      opacity: 0;
    }
  }
  
  input[type=text] {
    ${theme.fonts.TitilliumWebRegular}
    ${fontSize(16, 16)}
  }
  
  input[type=password] {
    ${fontSize(20,18)}  
  }
`;

export default BasicInput;