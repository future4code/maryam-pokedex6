import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/system';
import { theme } from './theme';
import PokedexPage from './pages/PokedexPage/PokedexPage';
import { createContext, useState, useContext, useEffect} from 'react';

export const GlobalContext = createContext ()

function App() {
const [pokedex, setPokedex] = useState([])


function addPokemon (pokemon) {
  const newpokedex = pokedex 
  newpokedex.push(pokemon)

  setPokedex(newpokedex)
}

  return (

    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value = {{pokedex, setPokedex, addPokemon}}>
      < Router />
      </GlobalContext.Provider>
    </ThemeProvider >

  );
}

export default App;
