import React, { useState } from 'react';
import CardsHome from '../../components/CardsHome/CardsHome';
import { Box } from '@material-ui/system';
import { Alert } from '@material-ui/core';
import Loading from '../../components/Loading/Loading';

function HomePage() {
  // const [error, setError] = useState(false)
  // const onClickSetError = () => {
  //   setError(!error)
  // }
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
      </Box>
    </div>
  );
}

export default HomePage;
