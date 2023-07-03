import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { isPokemonFavoriteApi } from "../../api/favorite";
import usePokemons from "../../hooks/usePokemons";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(null);
  const [releaodCheck, setReleaodCheck] = useState(false);
  const { removeFavoritePokemons, addFavoritePokemons } = usePokemons();

  useEffect(() => {
    (async () => {
      try {
        const isPokemonFavorite = await isPokemonFavoriteApi(id);
        setIsFavorite(isPokemonFavorite);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, releaodCheck]);

  const onReloadCheckFavorite = () => {
    setReleaodCheck((prev) => !prev);
  };

  const addFavorites = async () => {
    await addFavoritePokemons(id);
    onReloadCheckFavorite();
  };
  const removeFavorities = async () => {
    await removeFavoritePokemons(id);
    onReloadCheckFavorite();
  };

  return (
    <Icon
      name={isFavorite ? "heart" : "heart-outline"}
      size={20}
      color="#fff"
      onPress={isFavorite ? removeFavorities : addFavorites}
    />
  );
}
