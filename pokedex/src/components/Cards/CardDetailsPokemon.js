import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import styled from "styled-components"


function CardDetailsPokemon(props) {
  const pokemonTypes = props.pokemon && props.pokemon.types
    .map((type, index) => {
      return (
        <li key={index}>{type.name}</li>
      )
    })

  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {props.pokemon && props.pokemon.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img src={props.pokemon
            && props.pokemon.sprites
            && props.pokemon.sprites.front_default} />
        </Box>
        <Typography variant="body2" color="text.primary">
          <strong>tipo:</strong> <ul>{pokemonTypes}</ul>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardDetailsPokemon;