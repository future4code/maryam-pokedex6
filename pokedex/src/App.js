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
      .get(`${base_url}pokemon?limit=0&offset=0`)
      .then(response => {
        setPokemonsList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const addPokemon = (pokemon) => {
    if (!pokedexList.includes(pokemon)) {
      const updatedList = [...pokedexList, pokemon];
      setPokedexList(updatedList);
    }
  }

  const removePokemon = (pokemon) => {
    const pokemonIndex = pokedexList.indexOf(pokemon);
    const updatedList = pokedexList.splice(pokemonIndex, 1);
    setPokedexList(updatedList);
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
