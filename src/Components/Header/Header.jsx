import React from 'react';
import styled from "styled-components";
import { theme, macbook, flexContainer } from "../../lib/theme";

import Search from ".././Search/Search";
import UserForm from ".././UserForm/UserForm";

const BasicHeader = ({ className }) => {
  return(
    <div {...{ className}}>
      <Search />
      <UserForm />
    </div>
  );
};

const Header = styled(BasicHeader)`
  padding: ${theme.paddings.pcTop} ${theme.paddings.pcSide};
  ${flexContainer('space-between','center','center')}
`;

export default Header;