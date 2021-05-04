import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
          <label>Search Locations</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="places"
          list="places"
          type="text"
          className="form-control"
          id="searchPlaces"
        />
      </div>
    </form>
  );
}

export default SearchBar;
