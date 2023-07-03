import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import NoLogged from "../components/NoLogged";
import PokemonList from "../components/PokemonList";
import useAuth from "../hooks/useAuth";
import usePokemons from "../hooks/usePokemons";

export default function FavoriteScreen() {
  const { favoritePokemons, loadFavoritePokemons } = usePokemons();
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          await loadFavoritePokemons();
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList isFavoriteScreen={true} />;
}
