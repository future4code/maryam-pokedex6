import React from 'react';
import CardsHome from '../../components/CardsHome/CardsHome';
import { Box } from '@material-ui/system';

function HomePage() {
  return (
    <Box sx={{ display: 'grid',rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)',  m: 4, p:2}}>
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
