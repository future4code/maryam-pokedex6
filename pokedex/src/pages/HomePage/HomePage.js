import React, { useEffect, useState } from 'react';
import CardsHome from '../../components/CardsHome/CardsHome';
import { Box } from '@material-ui/system';
import Cards from "../../components/Cards/Cards"

function HomePage() {
  return (
    <Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
      <Cards
        cardWidth={250}
        pokeName={"Charmander"}
        pokeImage={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
        textBtn1={"adicionar"}
        textBtn2={"detalhes"}
        colorBtn1={"secondary"}
        colorBtn2={"secondary"}
        variantBtn1={"contained"}
        variantBtn2={"contained"}
      />
      <CardsHome />
      <CardsHome />
      <CardsHome />
      <CardsHome />
      <CardsHome />
      <CardsHome />
      <CardsHome />
      <CardsHome />
    </Box>
  );
}

export default HomePage;
