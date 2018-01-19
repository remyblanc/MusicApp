import React from 'react';

const SearchResult = (props) => {
  return(
    <div>
      <div>{`${props.songData.songAuthor}-${props.songData.songTitle}`}</div>
    </div>
  );
};

export default SearchResult;