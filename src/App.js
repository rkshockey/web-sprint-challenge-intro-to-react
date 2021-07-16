import React from 'react';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Character from './components/Character'
import { charCleanup, movCleanup } from './helper-functions';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [movies, setMovies] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    let char = []
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        char = charCleanup(res.data);
        setCharacters(char)
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    let mov = []
    axios.get(`https://swapi.dev/api/films`)
    .then(res => {
      mov = movCleanup(res.data.results)
      setMovies(mov)
    })
    .catch(err => console.log(err))
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(char => <Character character={char} movies={movies} key={char.name} />)}
    </div>
  );
}

export default App;
