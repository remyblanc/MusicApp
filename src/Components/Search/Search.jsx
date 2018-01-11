import React from 'react';
import styled from "styled-components";
import {theme, macbook, flexContainer, fontSize} from "../../../lib/theme";

const BasicSearch = ({ className }) => {
  return(
    <div {...{ className}}>
      <label>
        <span className="material-icons">search</span>
        <span>Search</span>
      </label>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

const Search = styled(BasicSearch)`
  position: relative;
  
  label {
    position: absolute;
    top: ${theme.paddings.inputTop};
    left: ${theme.paddings.inputSide};
    ${flexContainer('center','center','center')}
    
    span {
      margin-right: 5px;
      
      &.material-icons {
        color:red;
      }
    }
  }
  
  input[type=text] {
    background: ${theme.colors.menuColor};
    padding: ${theme.paddings.inputTop} ${theme.paddings.inputSide};
    ${theme.fonts.CirceLight}
    ${fontSize(16, 24)}
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export default Search;