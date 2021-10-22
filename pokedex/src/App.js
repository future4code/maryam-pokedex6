import React, { useState, useEffect } from 'react';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/system';
import { theme } from './theme';
import axios from "axios";
import { base_url } from './constants/url';
import Paginacao from './components/Paginação/Paginação';

const LIMIT = 2;


function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokedexList, setPokedexList] = useState([])
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemons = () => {
    axios
      .get(`${base_url}/pokemon?limit=${LIMIT}0&offset=0`)
      .then(response => {
        setPokemonsList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const addPokemon = (pokemonToAdd) => {
    const pokeIndex = pokemonsList.findIndex((item) => item.name === pokemonToAdd.name)
    const newPokemonsList = [...pokemonsList]
    newPokemonsList.splice(pokeIndex, 1)
    const newPokedexList = [...pokedexList, pokemonToAdd]

    setPokedexList(newPokedexList)
    setPokemonsList(newPokemonsList)
  

  // const addPokemon = (pokemonToAdd) => {
  //   if (!pokedexList.includes(pokemonToAdd)) {
  //     const newPokedexList = [...pokedexList, pokemonToAdd];
  //     newPokemonsList.splice(pokemonToAdd, 1)

  //     setPokedexList(newPokedexList);
  //     setPokemonsList(newPokemonsList)
  //   }

  }

  const removePokemon = (pokemonToRemove) => {
    const pokeIndex = pokemonsList.findIndex((item) => item.name === pokemonToRemove.name)
    const newPokedexList = [...pokedexList]
    newPokedexList.splice(pokeIndex, 1)

    const newPokemonsList = [...pokemonsList, pokemonToRemove]

    setPokedexList(newPokedexList)
    setPokemonsList(newPokemonsList)

    // const newPokedexList = pokedexList.filter(pokemon => pokemon.name !== pokemonToRemove.name);
    // setPokedexList(newPokedexList);
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
