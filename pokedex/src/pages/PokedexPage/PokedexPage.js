import React from 'react';
import CardsPokedex from '../../components/CardsPokedex/CardDetailsPo';
import { Box } from '@material-ui/system';
import Cards from "../../components/Cards/Cards"


function PokedexPage() {
  return (
    <Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
      <Cards
        cardWidth={250}
        pokeName={"Charmander"}
        pokeImage={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
        textBtn1={"remover"}
        textBtn2={"detalhes"}
        colorBtn1={"secondary"}
        colorBtn2={"secondary"}
        variantBtn1={"outlined"}
        variantBtn2={"contained"}
      />
      <CardsPokedex />
      <CardsPokedex />
      <CardsPokedex />
      <CardsPokedex />
      <CardsPokedex />
      <CardsPokedex />
      <CardsPokedex />
      <CardsPokedex />
    </Box>
  );
}

export default PokedexPage;
