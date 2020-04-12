  
import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../style/SearchName.css";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox wrap">
      <div className="input-group search">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
             
            </span>
          </div>
          <input
          className="form-control searchTerm mr-sm-2"
          type="search"
          placeholder="Search a name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}/>
        </div>
    </div>
  );
}
export default SearchName;