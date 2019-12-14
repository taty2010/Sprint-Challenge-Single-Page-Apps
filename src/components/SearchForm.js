import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"

export default function SearchForm(props) {
  const [search, setSearch] = useState("");

  const results = props.characters.map(e => {
    return e;
  })

  const [searchResults, setSearchResults] = useState(results)

   useEffect(() =>{
    
      const characters = results.filter(char => {
      return char.name.toString().toLowerCase().includes(search.toString().toLowerCase())
    });

    setSearchResults(characters)
   }, [search])

  const handleChange = event =>{
    setSearch(event.target.value)
  }

  return (
    <section className="search-form">
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
       {searchResults.map(results => {
        return <CharacterCard key="results" results={results.name}/>
       })}
     </div>
    </section>
  );
}
