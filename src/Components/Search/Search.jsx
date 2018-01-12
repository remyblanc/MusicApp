import React from 'react';
import styled from "styled-components";

import LangList from "../../Langs/LangList";
import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

const BasicSearch = ({ className }) => {
  return(
    <div {...{ className}}>
      <input
        type="text"
        data-value=""
        onChange={(e) => e.target.setAttribute('data-value', e.target.value)}
        onKeyUp={(e) => e.target.setAttribute('data-value', e.target.value)}
      />
      <label>
        <span>{LangList.En.Search}</span>
      </label>
      <button className="material-icons">search</button>
    </div>
  );
};

const Search = styled(BasicSearch)`
  position: relative;
  background: ${theme.colors.menuColor};
  border-radius: 4px;
  min-width: 400px;
  
  button {
    position: absolute;
    z-index: 3;
    top: ${theme.paddings.inputTop};
    left: ${theme.paddings.inputContainerSide};
    cursor: default;
  }
  
  label {
    position: absolute;
    z-index: 1;
    transition: 0.3s;
    top: 0px;
    left: calc(${theme.paddings.inputContainerSide} + 30px);
    top: calc(${theme.paddings.inputTop} + 6px);
  }
  
  input[type=text] {
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
    
    &:focus + label, &:not([data-value=""]) + label {
      opacity: 0;
    }
  }
`;

export default Search;