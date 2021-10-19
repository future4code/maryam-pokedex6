import React from 'react';
import CardsPokedex from '../../components/CardsPokedex/CardDetailsPo';
import { Box } from '@material-ui/system';
import Cards from "../../components/Cards/Cards";
import { Stack } from '@material-ui/core';
import { Pagination } from '@material-ui/core';
import { useState } from 'react';

function PokedexPage() {
  const [pokedex, setPokedex] = useState([])

  
  addPokemon = (pokemon) => {
    console.log(pokemon);
    if (!this.state.pokedex.includes(pokemon)) {
        this.setState({
            pokedex: [
            ...this.state.pokedex,
            pokemon,
            ]
        })
    } else {
        pokemon.quantity += 1;
        this.setState({
            pokedex: [
            ... this.state.pokedex,
            ]
        })
    }
}

removePokemon = (pokemon) => {
  const novoPokedex = this.state.pokedex.filter((item) => item !== pokemon)
  this.setState({
      pokedex: novoPokedex,
  })
}

return (
  <div>
<Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
 {pokedex, removePokemon}
</Box>
<Box display="flex" justifyContent="center" sx={{ m: 5 }}>
//         <Stack spacing={2}>
//           <Pagination count={3} color="secondary" />
//         </Stack></Box>
</div>
)
}
export default PokedexPage;
 
//           bgcolor={"#e0e0e0"}
//           cardWidth={250}
//           pokeName={"Charmander"}
//           pokeImage={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
//           textBtn1={"remover"}
//           textBtn2={"detalhes"}
//           colorBtn1={"primary"}
//           colorBtn2={"secondary"}
//           variantBtn1={"contained"}
//           variantBtn2={"contained"}
//         />
//         <CardsPokedex />
//         <CardsPokedex />
//         <CardsPokedex />
//         <CardsPokedex />
//         <CardsPokedex />
//         <CardsPokedex />
//         <CardsPokedex />
//         <CardsPokedex />
//       </Box>
//       <Box display="flex" justifyContent="center" sx={{ m: 5 }}>
//         <Stack spacing={2}>
//           <Pagination count={3} color="secondary" />
//         </Stack>
//      