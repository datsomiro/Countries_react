import React from "react";

const SearchBar = ({ onChange, handleKeyPress, onSubmit }) => {
    return (
        <div onKeyUp={handleKeyPress}>
            <input type="text" onChange={onChange} />
            <button className="searchBar-button" onClick={onSubmit}>
                Search
      </button>
        </div>
    );
};

export default SearchBar
