import React, { useEffect, useState } from 'react';
import CardsHome from '../../components/CardsHome/CardsHome';
import { Box } from '@material-ui/system';
import { Alert } from '@material-ui/core';
import Loading from '../../components/Loading/Loading';
import Cards from "../../components/Cards/Cards";
import { useRequestData } from '../../hooks/useRequestData';
import { base_url } from '../../constants/url';
import { Stack } from '@material-ui/core';
import { Pagination } from '@material-ui/core';
import axios from 'axios';
import PokedexPage from '../PokedexPage/PokedexPage';

function HomePage(props) {
  const [pokemonsList, setPokemonsList] = useState([]);

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

  const pokemonsCards = pokemonsList && pokemonsList.map(
    pokemon => {
      return (
        <Cards
          url={pokemon.url}
          cardWidth={250}
          textBtn1={"adicionar"}
          textBtn2={"detalhes"}
          colorBtn1={"secondary"}
          colorBtn2={"secondary"}
          variantBtn1={"contained"}
          variantBtn2={"contained"}
        />
      )
    }
  )

  return (
    <div>
      <Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
        {pokemonsCards}
        <button onClick={() => props.addPokemon(pokemon)}>Adicionar Pokemon</button>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ m: 5 }}>
        <Stack spacing={2}>
          <Pagination count={10} color="secondary" />
        </Stack>
      </Box>
    </div>
  );
}

export default HomePage;
