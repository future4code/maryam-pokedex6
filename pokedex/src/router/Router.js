import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";
import Header from "../components/Header/Header";

const Router = (props) => {

  return (
    < BrowserRouter >
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage
            pokemonsList={props.pokemonsList}
            addPokemon={props.addPokemon}
          />
        </Route>
        <Route exact path={"/pokedex"}>
          <PokedexPage
            pokedexList={props.pokedexList}
            removePokemon={props.removePokemon}
          />
        </Route>
        <Route exact path={"/details"}>
          <PokemonDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter >
  )
}

export default Router;