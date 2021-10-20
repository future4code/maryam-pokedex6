import React from 'react';
import CardsPokedex from '../../components/CardsPokedex/CardDetailsPo';
import { Box } from '@material-ui/system';
import Cards from "../../components/Cards/Cards";
import { Stack } from '@material-ui/core';
import { Pagination } from '@material-ui/core';
import { createContext, useState, useContext, useEffect} from 'react';


const pokemonContext = createContext ()

export default function PokedexPage({children}) {
  const [pokedex, setPokedex] = useState([])

  useEffect (() => {
    console.log(pokedex)
  }, [pokedex])

  function addPokemon (pokemon) {
    const newpokedex = pokedex 
    newpokedex.push(pokemon)

    setPokedex(newpokedex)
  }

//   removePokemon = (index) => {
//     const newPokedex = pokedex
    
//     delete newPokedex[index]
    
//     setPokedex([...newPokedex])
// }

  const pagePokedex = {
    addPokemon,
    pokedex,
   
  }

  return (
    <div>
      <Box sx={{ display: 'grid', rowGap: 4, gridTemplateColumns: 'repeat(4, 2fr)', m: 4, p: 2 }}>
<pokemonContext.Provider value={pagePokedex}>
  {children}
</pokemonContext.Provider>
</Box>
  <Box display="flex" justifyContent="center" sx={{ m: 5 }}>
  //         <Stack spacing={2}>
  //           <Pagination count={3} color="secondary" />
  //         </Stack></Box>
  </div>
  )
}

export  function usePokedex () {
const context = useContext(pokemonContext)
const {
    pokedex,
    addPokemon,
  } = context

  return {
    pokedex,
    addPokemon,
  }
}


// // )
// // }
//  <Box display="flex" justifyContent="center" sx={{ m: 5 }}>
// <Stack spacing={2}>
// <Pagination count={3} color="secondary" />
// </Stack>
// {/* 
// export default PokedexPage;
 
// //           bgcolor={"#e0e0e0"}
// //           cardWidth={250}
// //           pokeName={"Charmander"}
// //           pokeImage={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
// //           textBtn1={"remover"}
// //           textBtn2={"detalhes"}
// //           colorBtn1={"primary"}
// //           colorBtn2={"secondary"}
// //           variantBtn1={"contained"}
// //           variantBtn2={"contained"}
// //         />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //         <CardsPokedex />
// //       </Box>
//       <Box display="flex" justifyContent="center" sx={{ m: 5 }}>
//         <Stack spacing={2}>
//           <Pagination count={3} color="secondary" />
//         </Stack>
//       */}

      
// {/* //     if (!this.state.pokedex.includes(pokemon)) { */}
// {/* //         this.setState({ */}
// //             pokedex: [
// //             ...this.state.pokedex,
// //             pokemon,
// //             ]
// //         })
// //     } else {
// //         pokemon.quantity += 1;
// //         this.setState({
// //             pokedex: [
// //             ... this.state.pokedex,
// //             ]
// //         })
// //     }
// // }

// // 