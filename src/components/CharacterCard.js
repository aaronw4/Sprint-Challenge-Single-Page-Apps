import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function CharacterCard(props) {
  const [character, setCharacter] = useState({});
  const id = window.location.pathname;

  useEffect(() => {
    const getChar = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character${id}`)
        .then(response => {
          setCharacter(response.data);
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getChar();
  }, [id]);
  
  return(
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.id}/>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}
