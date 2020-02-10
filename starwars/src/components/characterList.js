import React, { useEffect, useState } from "react";

import axios from "axios";
import CharacterCard from "./characterCard";
import { Container, Row } from "reactstrap";


const CharacterList = () => {
  const initialState = [];
  const [characters, setCharacters] = useState(initialState);
  
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
  
  useEffect(effectCallbackFn, []);

  console.log("initial render of characters", characters);
  return (
    <Container>
        <Row>
      {characters.map(character => (
        <CharacterCard key={character.url} character={character} />
      ))}
      </Row>

    </Container>
  );
};


export default CharacterList;