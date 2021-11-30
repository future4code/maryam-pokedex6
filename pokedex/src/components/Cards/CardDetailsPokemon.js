import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';


function CardDetailsPokemon(props) {
  const pokemonTypes = props.pokemon && props.pokemon.types
    .map(type => {
      console.log("pokemon type", type)
      return (
        <Typography variant="body2" key={type.type.name}>
          {type.type.name}
        </Typography>
      )
    })

  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {props.pokemon && props.pokemon.name}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          aligmItems: "center",
          width: 100,
          height: 200
        }}>
          <img src={props.pokemon
            && props.pokemon.sprites
            && props.pokemon.sprites.front_default} />
          <img src={props.pokemon
            && props.pokemon.sprites
            && props.pokemon.sprites.back_default} />
        </Box>
        <strong>tipo:</strong>
        {pokemonTypes}
      </CardContent>
    </Card>
  );
}

export default CardDetailsPokemon;