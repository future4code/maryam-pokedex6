import React from 'react';
import CardsPokedex from '../../components/CardsPokedex/CardsPokedex';
import { Box } from '@material-ui/system';

function PokedexPage() {
  return (
    <Box sx={{ display: 'grid',rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)',  m: 4, p:2}}>
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
