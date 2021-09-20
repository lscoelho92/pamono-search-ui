import React from "react";

import "../Styles/Components/searchBar.scss";

function SearchBar(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        className="movie-title-input"
        placeholder="Insert the movie title"
      />
    </div>
  );
}

export default SearchBar;
