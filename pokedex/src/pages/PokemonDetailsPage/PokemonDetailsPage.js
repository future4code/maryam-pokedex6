import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/system';
import CardDetailsMoves from '../../components/Cards/CardDetailsMoves';
import CardDetailsPokemon from '../../components/Cards/CardDetailsPokemon';
import CardDetailsStats from '../../components/Cards/CardDetailsStats';
import { useHistory, useParams } from "react-router";
import { Button } from '@material-ui/core';
import { base_url } from '../../constants/url';
import axios from 'axios';

function PokemonDetailsPage() {
  const history = useHistory();
  const params = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemonDetails(`${base_url}/pokemon/${params.name}`);
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

  const goBack = () => {
    history.goBack();
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', m: 4, p: 2 }}>
        <CardDetailsPokemon pokemon={pokemon} />
        <CardDetailsStats pokemon={pokemon} />
        <CardDetailsMoves pokemon={pokemon} />
      </Box >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, p: 2 }}>
        <Button variant="contained" color="secondary" onClick={() => goBack()}>Voltar</Button>
      </Box>
    </div >
  );
}

export default PokemonDetailsPage;
