import React from 'react';
import styled from "styled-components";
import { theme, macbook } from "../../../lib/theme";

const BasicSearch = ({ className }) => {
  return(
    <div {...{ className}}>
      Search
    </div>
  );
};

const Search = styled(BasicSearch)`
  
`;

export default Search;