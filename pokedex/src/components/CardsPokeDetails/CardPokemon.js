import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import styled from "styled-components"

const PokeImg = styled.img`
  height: 7rem;
  width: 7rem;
`

function CardPokemon(props) {
  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary">
          nome pokemon
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <PokeImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
          <PokeImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" />
        </Box>
        <Typography variant="body2" color="text.primary">
          <strong>tipo:</strong> grass | poison
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardPokemon;