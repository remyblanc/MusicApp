import React from 'react';
import styled from "styled-components";
import { theme, macbook } from "../../lib/theme";

const BasicUserPic = ({ className }) => {
  return(
    <div {...{ className}}>
      UserPic
    </div>
  );
};

const UserPic = styled(BasicUserPic)`
  
`;

export default UserPic;