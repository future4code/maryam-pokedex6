import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import axios from "axios";
import { useHistory } from 'react-router';
import { base_url } from '../../constants/url';

function CardsHome(props) {
  const [pokemon, setPokemon] = useState();
  const history = useHistory();

  useEffect(() => {
    getPokemonDetails(`${base_url}/pokemon/${props.pokemon.name}`);
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

  const goToDetailsPage = (name) => {
    history.push(`/details/${name}`)
  }

  return (
    <Card sx={{ maxWidth: 250, boxShadow: 7, bgcolor: (props.bgcolor) }} align="center">
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.primary" >
          {pokemon && pokemon.name}
        </Typography>
        <img src={pokemon && pokemon.sprites && pokemon.sprites.front_default} />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          size="small"
          onClick={props.onClickBtn1}
          color={props.colorBtn1}
          variant={props.variantBtn1}
        >
          {props.textBtn1}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={props.onClickBtn2}
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