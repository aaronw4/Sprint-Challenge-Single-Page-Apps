import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import CharacterCard from './CharacterCard';
import WelcomePage from './WelcomePage';
import Character from './Character';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getChar = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          setSearchResults(response.data.results);
          console.log(response.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getChar();
  }, []);

  useEffect(() => {
    const results = characters.filter(character =>
      
      character.name.includes(searchTerm)
    
    );
    setSearchResults(results);
  }, [searchTerm]);
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <div>
      <Route exact path='/' component={WelcomePage}/>
      <form className='form'>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className='input'
        />
      </form>

      <div className="App">
        <form>
          <label for="name">Search:</label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>      
      </div>

      <div className='grid-view'>
      {searchResults.map(char => (
        <CharacterName key={char.id} char={char}/> 
      ))}  
      </div>
      
      <Route path='/:id' component={CharacterCard}/>
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
