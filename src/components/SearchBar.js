import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment bg-color">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
