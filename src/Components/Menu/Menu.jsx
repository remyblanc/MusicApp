import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { theme, macbook } from "../../lib/theme";

import logo from '../../lib/logo.png';

const BasicMenu = ({ className }) => {
  return(
    <div {...{ className}}>
      <div>
        <Link to="/">
          <img alt="" src={logo} />
        </Link>
      </div>
      <br />
      <div>playlists</div>
    </div>
  );
};

const Menu = styled(BasicMenu)`
  height: 100%;
  padding: 35px 20px;
  position: fixed;
  left: 0px;
  background: ${theme.colors.menuColor};
`;

export default Menu;