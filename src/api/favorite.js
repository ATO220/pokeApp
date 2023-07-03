import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../config/config";
export const getPokemonsFavoriteApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || "[]")
      .map((e) => parseInt(e))
      .sort((a, b) => a - b);
  } catch (error) {
    throw new Error(`Failed get pokemons favorites : ${error}`);
  }
};

export const addPokemonFavoriteApi = async (id) => {
  try {
    const favorities = await getPokemonsFavoriteApi();
    favorities.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorities));
    return favorities;
  } catch (error) {
    throw new Error(`Failed add pokemonId ${id} to favorites : ${error}`);
  }
};

export const isPokemonFavoriteApi = async (id) => {
  try {
    const favorities = await getPokemonsFavoriteApi();
    return includes(favorities, id);
  } catch (error) {
    throw new Error(`Failed check is pokemonId ${id} in favorites : ${error}`);
  }
};

export const removePokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonsFavoriteApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    return newFavorites;
  } catch (error) {
    throw new Error(`Failed remove pokemonId ${id} of favorites : ${error}`);
  }
};
