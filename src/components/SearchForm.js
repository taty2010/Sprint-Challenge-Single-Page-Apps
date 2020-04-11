import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

const SearchForm = ({ searchResults, handleChange, search }) => {
  return (
    <div className="search-form">
      <form>
        <label htmlFor="name">
          Search:
          <input
            id="name"
            type="text"
            placeholder="Search Name"
            value={search}
            onChange={handleChange}
          />
        </label>
      </form>
      <div>
        {searchResults.map((results, index) => (
          <CharacterCard
            key={results.name}
            search={search}
            results={results.name}
          />
        ))}
      </div>
    </div>
  );
};
export default SearchForm;
