import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import axios from "axios";

function CardsHome(props) {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    getPokemonDetails(props.url)
  }, [])


  const getPokemonDetails = (url) => {
    axios
      .get(url)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <Card sx={{ maxWidth: (props.cardWidth), boxShadow: 7, bgcolor: (props.bgcolor) }} align="center">
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.primary" >
          {pokemon && pokemon.forms && pokemon.forms.name}
        </Typography>
        <img src={pokemon && pokemon.sprites && pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={props.onClick}
          color={props.colorBtn1}
          variant={props.variantBtn1}
        >
          {props.textBtn1}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={props.onClick}
          color={props.colorBtn2}
          variant={props.variantBtn2}
        >
          {props.textBtn2}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardsHome;