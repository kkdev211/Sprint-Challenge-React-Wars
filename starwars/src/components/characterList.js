import React, { useEffect, useState } from "react";
// 2. Axios import
import axios from "axios";
import CharacterCard from "./characterCard";

// 3. Set up components with empty div return
const CharacterList = () => {
  // 5. set up state
  const initialState = [];
  const [characters, setCharacters] = useState(initialState);
  //4. set up useEffect
  const effectCallbackFn = () => {
    console.log("calling effect fn!");
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("response from api!");
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  };
  // [] => only fire after initial render
  // [state, stateTwo] => if any state value that is included in the 
  // dependency array is CHANGED then the useEffect function is called again
  useEffect(effectCallbackFn, []);

  console.log("initial render of characters", characters);
  return (
    <div>
      {characters.map(character => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  );
};


export default CharacterList;