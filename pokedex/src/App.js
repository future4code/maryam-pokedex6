import React, { useState, useEffect } from 'react';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/system';
import { theme } from './theme';
import axios from "axios";
import { base_url } from './constants/url';

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokedexList, setPokedexList] = useState([])

  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemons = () => {
    axios
      .get(`${base_url}/pokemon?limit=0&offset=0`)
      .then(response => {
        setPokemonsList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const addPokemon = (pokemonToAdd) => {
    if (!pokedexList.includes(pokemonToAdd)) {
      const newPokedexList = [...pokedexList, pokemonToAdd];
      setPokedexList(newPokedexList);
    }
  }

  const removePokemon = (pokemonToRemove) => {
    const newPokedexList = pokedexList.filter(pokemon => pokemon.name !== pokemonToRemove.name);
    setPokedexList(newPokedexList);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router
        pokemonsList={pokemonsList}
        pokedexList={pokedexList}
        addPokemon={addPokemon}
        removePokemon={removePokemon}
      />
    </ThemeProvider >
  );
}

export default App;
