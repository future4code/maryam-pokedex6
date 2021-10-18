import React from 'react';
import { Box } from '@material-ui/core';


function CardsPokeDetails() {
  return (
  <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    
   
  }}
>
  <Box sx={{  bgcolor: 'info.main', border: 1, height: 100, width: 100, m: 4, p:2  }}>Imagem Frente 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" /></Box>
  <Box sx={{ bgcolor: 'info.main',  border: 1, height: 100, width: 100, m: 4, p:2}}>Imagem Trás</Box>
  <Box sx={{ bgcolor: 'info.main', border: 1 , height: 300, width: 800, m: 4, p:2}}>Poderes: </Box>
  <Box sx={{  bgcolor: 'info.main',  border: 1, height: 200, width: 200, m: 4, p:2 }}>Principais ataques:</Box>
</Box>
  );
}

export default CardsPokeDetails;