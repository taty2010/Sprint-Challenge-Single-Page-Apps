import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  const [searchChar, setSearchChar] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.
    get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      setCharacter(response.data.results);
      setSearchChar(response.data.results)
    })
    .catch(error => {console.log('error')})
  }, []);

  return (
    <section className="character-list">
      <SearchForm characters={searchChar} />
      <div>{character.map(char =>{
         return (
           <div>
            <CharacterCard key={char.id} name={char.name} />
         </div>
         )
      })}</div>
    </section>
  );
}
