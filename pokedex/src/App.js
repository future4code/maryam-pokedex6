import React, { useState } from 'react';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/system';
import { theme } from './theme';
import { DataContext } from './contexts/DataContext';
import { useRequestData } from './hooks/useRequestData';
import { base_url } from './constants/url';

function App() {
  const [pokeListData, isLoadingPokeList, errorPokelist] = useRequestData(`${base_url}?limit=20`)

  return (
    <ThemeProvider theme={theme}>
      <DataContext value={pokeListData.results}>
        < Router />
      </DataContext>
    </ThemeProvider>
  );
}

export default App;
