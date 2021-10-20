import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { usePokedex } from '../../pages/PokedexPage/PokedexPage';

function CardsHome(props) {
  
  const {addPokemon} = usePokedex ()

  return (
    <Card sx={{ maxWidth: 250, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.primary" >
          nome pokemon
        </Typography>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" size="small" onClick={()=> addPokemon ()}>Adicionar</Button>
        <Button color="primary" variant="contained" size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}

export default CardsHome;