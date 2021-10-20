import React from 'react';
import CardMoves from '../../components/CardsPokeDetails/CardMoves';
import CardStats from '../../components/CardsPokeDetails/CardStats';
import CardPokemon from '../../components/CardsPokeDetails/CardPokemon';
import { Box } from '@material-ui/system';


function PokemonDetailsPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', m: 4, p: 2 }}>
      <CardPokemon />
      <CardMoves />
      <CardStats />
    </Box >
  );
}

export default PokemonDetailsPage;
