import React, { useState } from 'react';
import Router from "./router/Router";
import { ThemeProvider } from '@material-ui/system';
import { theme } from './theme';
import PokedexPage from './pages/PokedexPage/PokedexPage';

function App() {
  return (

    <ThemeProvider theme={theme}>
      < Router />
    </ThemeProvider >

  );
}

export default App;
