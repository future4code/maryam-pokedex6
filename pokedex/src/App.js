import React, { useState, useEffect } from 'react';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/system';
import { theme } from './theme';
import axios from "axios";
import { base_url } from './constants/url';
import Loading from './components/Loading/Loading';

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemons = () => {
    setIsLoading(true);
    axios
      .get(`${base_url}/pokemon?limit=0&offset=0`)
      .then(response => {
        setPokemonsList(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      })
  }

  const addPokemon = (pokemonToAdd) => {
    console.log(pokemonToAdd);
    const pokeIndex = pokemonsList.findIndex((item) => item.name === pokemonToAdd.name);
    const newPokemonsList = [...pokemonsList];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => { return a.id - b.id });

    const newPokedexList = [...pokedexList, pokemonToAdd];
    const orderedPokedex = newPokedexList.sort((a, b) => { return a.id - b.id });

    setPokedexList(orderedPokedex);
    setPokemonsList(orderedPokemons);
  }

  const removePokemon = (pokemonToRemove) => {
    const pokeIndex = pokedexList.findIndex((item) => item.name === pokemonToRemove.name);
    const newPokedexList = [...pokedexList];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => { return a.id - b.id });

    const newPokemonsList = [...pokemonsList, pokemonToRemove];
    const orderedPokemons = newPokemonsList.sort((a, b) => { return a.id - b.id });

    setPokedexList(orderedPokedex);
    setPokemonsList(orderedPokemons);
  }

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <Loading isLoading={isLoading} />}
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
