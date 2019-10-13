import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './Header';
import styled from 'styled-components';

export default function CharacterCard() {
  const [character, setCharacter] = useState({});
  const id = window.location.pathname;

  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Img = styled.div`
    margin-right: 50px;
  `;

  const Text = styled.div`
    color: #11B0C8;
    font-size: 1.6rem;
  `

  useEffect(() => {
    const getChar = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character${id}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getChar();
  }, [id]);
  
  return(
    <div className='card'>
      <Header />
      <Container>
        <Img>
          <img src={character.image} alt={character.id}/>
        </Img>
        <Text>
          <h2>{character.name}</h2>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
        </Text>
      </Container>
    </div>
  );
}
