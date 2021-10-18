import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useHistory, useParams } from "react-router";
import PokedexLogo from "../../assets/Pokedex.png";
import styled from "styled-components"

const Logo = styled.img`
  height: 3rem;
  margin: 0.5rem;
`

function Header() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/")
  }

  const goToPokedexPage = () => {
    history.push("/pokedex")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button variant="text" onClick={() => goToHomePage()}>
              <Logo src={PokedexLogo} />
            </Button>
          </Typography>
          <Button color="inherit" onClick={() => goToHomePage()}>Home</Button>
          <Button color="inherit" onClick={() => goToPokedexPage()}>Pokedex</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
