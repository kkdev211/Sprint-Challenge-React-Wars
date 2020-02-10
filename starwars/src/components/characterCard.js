import React from "react";


const CharacterCard = ({ character }) => {

    return (
        <div className="character-list">
          <h2>Name: {character.name}</h2>
        </div>
      );
    };
    
    export default CharacterCard;