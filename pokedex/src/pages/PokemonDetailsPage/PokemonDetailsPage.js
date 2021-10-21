import React from 'react';
import { Box } from '@material-ui/system';
import CardDetailsMoves from '../../components/Cards/CardDetailsMoves';
import CardDetailsPokemon from '../../components/Cards/CardDetailsPokemon';
import CardDetailsStats from '../../components/Cards/CardDetailsStats';


function PokemonDetailsPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', m: 4, p: 2 }}>
      <CardDetailsPokemon />
      <CardDetailsMoves />
      <CardDetailsStats />
    </Box >
  );
}

export default PokemonDetailsPage;
