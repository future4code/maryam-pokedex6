import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#f00',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#40FFDC',
      main: '#3f51b5',
      // dark: will be calculated from palette.secondary.main,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});