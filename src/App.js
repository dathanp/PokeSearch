import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Search from './Search';
import PokeList from './PokeList';
import logo from './logo.svg';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const searchPokemon = async (query) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + query.toLowerCase());
      console.log(response.data);
      setPokemons([response.data]);
    } catch (error) {
      console.error("Pokemnon not found", error);
      setPokemons([]);
    }
  };
// check the state
    useEffect(() => {
      console.log(pokemons);
    }, [pokemons]);

  

  return (
    <div className="App">
      <h1>Pokémon Search</h1>
    <Search onSearch={searchPokemon} />
    <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
