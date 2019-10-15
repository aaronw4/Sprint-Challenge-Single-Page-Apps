import React, { useState, useEffect } from "react";
import axios from 'axios';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  var characters = [];

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {      
      characters = response.data.results.name;
    })
    .catch(err => console.log(err));

    const results = characters.filter(character =>
      
      character.toLowerCase().includes(searchTerm)
    
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
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
  );
}
export default SearchForm
  
  