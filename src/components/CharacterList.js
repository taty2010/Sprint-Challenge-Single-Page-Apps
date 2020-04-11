import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  const list = character.map(results => {
    return results;
  });

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(list);

  useEffect(() => {
    const results = list.filter(char => {
      return char.name.toLowerCase().includes(search.toLowerCase());
    });

    setSearchResults(results);
  }, [search]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  //console.log(search)

  return (
    <div>
      <SearchForm
        searchResults={searchResults}
        handleChange={handleChange}
        search={search}
      />
      <div>
        {character.map(char => {
          return (
            <div>
              <CharacterCard
                key={char.id}
                search={search}
                name={char.name}
                image={char.image}
                gender={char.gender}
                species={char.species}
                status={char.status}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
