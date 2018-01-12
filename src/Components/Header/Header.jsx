import React from 'react';
import styled from "styled-components";
import { theme, macbook, flexContainer } from "../../lib/theme";

import Search from ".././Search/Search";
import UserPic from ".././UserPic/UserPic";

const BasicHeader = ({ className }) => {
  return(
    <div {...{ className}}>
      <Search />
      <UserPic />
    </div>
  );
};

const Header = styled(BasicHeader)`
  padding: ${theme.paddings.pcTop} ${theme.paddings.pcSide};
  ${flexContainer('space-between','center','center')}
`;

export default Header;