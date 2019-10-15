import React, { useState, useEffect } from "react";
import axios from 'axios';

const characters = [
  "Harry Potter",
  "Luna Lovegood",
  "Neville Longbottom",
  "Hermione Granger",
  "Ron Weasley",
  "Ginny Weasley",
  "Fred Weasley",
  "George Weasley",
  "Albus Dumbledore ",
  "Aberforth Dumbledore ",
  "Dudley Dursley ",
  "Petunia Dursley ",
  "Vernon Dursley",
  "Cornelius Fudge",
  "Rubeus Hagrid ",
  "Viktor Krum ",
  "Bellatrix Lestrange",
  "Narcissa Malfoy",
  "Draco Malfoy"
];

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characters.filter(character =>
      
      character.toLowerCase().includes(searchTerm)
    
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
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
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default SearchForm
  /*axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      let data = response.data.results;
      return data;      
    })
    .catch(err => console.log(err));
  */