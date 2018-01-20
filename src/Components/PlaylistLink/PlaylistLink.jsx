import React from 'react';
import styled from "styled-components";

import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import { connect } from "react-redux";

const BasicPlaylistLink = (props) => {
  return(
    <div className={props.className}>
      {props.PlaylistLinkTitle}
    </div>
  );
};

const PlaylistLink = styled(BasicPlaylistLink)`
  cursor: pointer;
  text-align: left;
    
  span {
    ${fontSize(14, 14)}
  }
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(PlaylistLink);