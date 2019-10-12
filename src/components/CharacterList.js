import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import CharacterCard from './CharacterCard';
import WelcomePage from './WelcomePage';
import Character from './Character'

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
      <Route exact path='/' component={WelcomePage}/>

      {characters.map(char => (
        <CharacterName key={char.id}char={char}/> 
      ))}  
      
      <CharacterDetails key={characters.id} char={characters}/>
    </div>
  );  
}

function CharacterName({char}) {
  const { name, id, image } = char;
  return( 
    <Route exact path='/' render={props =>
    <Character
    name = {name}
    id = {id}
    image = {image}
    />}
    />  
  )
}

function CharacterDetails({char}) {
  const { image, name, species, gender, status } = char;
  return(        
    <Route path='/:id' render={props => 
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