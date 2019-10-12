import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import CharacterCard from './CharacterCard';
import WelcomePage from './WelcomePage';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getChar = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          console.log(response.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getChar();
  }, []);

  return (
    <div>
      <CharacterName char={characters}/> 
      
      {characters.map(char => ( 
        <CharacterDetails key={char.name} char={char}/>
      ))}
    </div>
  );  
}

function CharacterName({char}) {
  return(
    <Route exact path='/' render={props =>
      <WelcomePage 
        names = {char.map(char => char.name)}
      />}
    />
  )
}

function CharacterDetails({char}) {
  const { image, name, species, gender, status } = char;
  return(        
    <Route path='/character/:id' render={props => 
      <CharacterCard 
      image = {image}
      name = {name}
      species = {species}
      gender = {gender}
      status = {status}
      />}
    />
  )
}