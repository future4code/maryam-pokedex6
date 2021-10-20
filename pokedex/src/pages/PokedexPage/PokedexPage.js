import React from 'react';
import CardsPokedex from '../../components/CardsPokedex/CardDetailsPo';
import { Box } from '@material-ui/system';
import Cards from "../../components/Cards/Cards";
import { Stack } from '@material-ui/core';
import { Pagination } from '@material-ui/core';
import { useState } from 'react';


function PokedexPage(props) {
  const [pokedexList, setPokedexList] = useState(props.pokedex)

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

  const pokemonsCards = pokedexList && pokedexList.map(
    pokemon => {
      return (
        <Cards
          url={pokemon.name}
          cardWidth={250}
          textBtn1={"remover"}
          textBtn2={"detalhes"}
          onClickBtn1={() => removePokemon(pokemon.name)}
          onClickBtn2={() => addPokemon(pokemon.name)}
          colorBtn1={"primary"}
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
  )
}
export default PokedexPage;