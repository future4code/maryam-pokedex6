import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/pokedex"}>
          <PokedexPage />
        </Route>
        {/* <Route exact path={"/details/:id"}> */}
        {/* APGAR A LINHA ABAIXO E DESCOMENTAR A DE CIMA DEPOIS: */}
        <Route exact path={"/details/"}>
          <PokemonDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;