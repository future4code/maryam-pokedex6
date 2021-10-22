import React from 'react';
import { useHistory } from "react-router";
import { Box } from '@material-ui/system';
import Cards from "../../components/Cards/Cards";
import { Stack } from '@material-ui/core';
import { Pagination } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function PokedexPage(props) {
  const history = useHistory();

  const goToDetailsPage = (name) => {
    history.push(`/details/${name}`)
  }

  const pokemonsCards = props.pokedexList && props.pokedexList.map(
    pokemon => {
      return (
        <Cards key={pokemon.name}
          pokemon={pokemon}
          textBtn1={"remover"}
          textBtn2={"detalhes"}
          colorBtn1={"primary"}
          colorBtn2={"secondary"}
          variantBtn1={"contained"}
          variantBtn2={"contained"}
          onClickBtn1={() => props.removePokemon(pokemon)}
          onClickBtn2={() => goToDetailsPage(pokemon.name)}
        />
      )
    }
  )

  return (
    <div>
      <Typography variant="h5" color="secondary" sx={{ mx: 7, mt: 4 }}>
        <strong>Sua pokedex</strong>
      </Typography>
      <Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
        {pokemonsCards}
      </Box>
      {/* PAGINAÇÃO */}
      <Box display="flex" justifyContent="center" sx={{ m: 5 }}>
        <Stack spacing={2}>
          <Pagination count={10} color="secondary" />
        </Stack>
      </Box>
    </div>
  )
}
export default PokedexPage;