import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";
import { onSearch } from '../../actions';

import LangList from "../../Langs/LangList";
import {theme, macbook, flexContainer, fontSize} from "../../lib/theme";

import SearchResult from "../SearchResult/SearchResult";

const BasicSearch = (props) => {
  return(
    <div className={props.className}>
      <input
        className="search"
        type="text"
        data-value=""
        onChange={
          (e) => {
            e.target.setAttribute('data-value', e.target.value);
            e.target.value.length >= '3' ? (
              props.onSearch(e.target.value)
            ) : props.onSearch(null);
          }
        }
        onKeyUp={(e) => e.target.setAttribute('data-value', e.target.value)}
      />
      <label>
        <span className="material-icons">search</span>
        <span>{LangList.En.Search}</span>
      </label>
      <SearchResults>
        {
          props.store.search.searchData ? (
            props.store.search.searchData.map((song) => { return (
              <SearchResult
                key={song.songID}
                songData={song}
              />)
          })) : null
        }
      </SearchResults>
    </div>
  );
};

const SearchResults = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  text-align: left;
  width: 100%;
  z-index: 2;
`;

const Search = styled(BasicSearch)`
  position: relative;
  background: ${theme.colors.menuColor};
  border-radius: 4px;
  min-width: 400px;
  
  button {
    position: absolute;
    z-index: 3;
    top: ${theme.paddings.inputTop};
    left: ${theme.paddings.inputSide};
    cursor: default;
  }
  
  label {
    position: absolute;
    z-index: 1;
    transition: 0.3s;
    left: ${theme.paddings.inputLabelSide};
    top: ${theme.paddings.inputLabelTop};
    ${flexContainer('center','center','center')}
    
    span:not(.material-icons) {
      margin: -1px 0 0 3px;
    }
  }
  
  input[type=text] {
    padding: ${theme.paddings.inputTop} ${theme.paddings.inputSide};
    background: transparent;
    ${theme.fonts.TitilliumWebRegular}
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
`;


function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (searchData) => dispatch(onSearch(searchData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);