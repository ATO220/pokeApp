import React from "react";

import SearchPokemon from "../components/Pokemon/SearchPokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  return (
    <>
      <SearchPokemon />
      <PokemonList />
    </>
  );
}
