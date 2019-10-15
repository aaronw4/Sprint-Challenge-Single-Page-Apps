import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import CharacterCard from './CharacterCard';
import WelcomePage from './WelcomePage';
import Character from './Character'

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [charSearch, setCharSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharSearch(response.data.results.name);
    })
    .catch(err => console.log(err));

    const results = charSearch.filter(character =>
      
      character.toLowerCase().includes(searchTerm)
    
    );
    setSearchResults(results);
  }, [searchTerm, charSearch]);
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
    <div>
      <Route exact path='/' component={WelcomePage}/>

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
      {characters.map(char => (
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
