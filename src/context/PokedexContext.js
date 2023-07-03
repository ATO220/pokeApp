import { createContext, useState } from "react";
import {
  addPokemonFavoriteApi,
  getPokemonsFavoriteApi,
  removePokemonFavoriteApi,
} from "../api/favorite";
import {
  getPokemonDetailsByIdApi,
  getPokemonDetailsByUrlApi,
  getPokemonsApi,
  searchPokemonByNameApi,
} from "../api/pokemon";

export const PokemonsContext = createContext();

export const PokemonsProvider = (props) => {
  const { children } = props;
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const [nextUrl, setNextUrl] = useState(null);

  const searchPokemonByName = async (name) => {
    try {
      const pokemonSearched = await searchPokemonByNameApi(name);

      const pokemonData = {
        id: pokemonSearched.id,
        name: pokemonSearched.name,
        type: pokemonSearched.types[0].type.name,
        order: pokemonSearched.order,
        image: pokemonSearched.sprites.other["official-artwork"].front_default,
      };
      setPokemonsList([pokemonData]);
    } catch (error) {
      setPokemonsList(allPokemons);
      throw new Error(`Failed search pokemon by name ${name}: ${error}`);
    }
  };

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      const pokemons = await getListPokemonDetailsByField(
        response.results,
        "url"
      );

      setNextUrl(response.next);
      setPokemonsList([...allPokemons, ...pokemons]);
      setAllPokemons([...allPokemons, ...pokemons]);
    } catch (error) {
      throw new Error(`Failed load pokemons (nextUrl:${nextUrl}): ${error}`);
    }
  };

  const loadFavoritePokemons = async () => {
    const favoritePokemons = await getPokemonsFavoriteApi();
    const favoritePokemonsList = await getListPokemonDetailsByField(
      favoritePokemons,
      "id"
    );
    setFavoritePokemons(favoritePokemonsList);
  };

  const addFavoritePokemons = async (id) => {
    const updatedFavoritePokemonsList = await addPokemonFavoriteApi(id);
    const favoritePokemonsList = await getListPokemonDetailsByField(
      updatedFavoritePokemonsList,
      "id"
    );
    setFavoritePokemons(favoritePokemonsList);
  };

  const removeFavoritePokemons = async (id) => {
    const updatedFavoritePokemonsList = await removePokemonFavoriteApi(id);
    const favoritePokemonsList = await getListPokemonDetailsByField(
      updatedFavoritePokemonsList,
      "id"
    );
    setFavoritePokemons(favoritePokemonsList);
  };

  const valueContext = {
    pokemonsList,
    favoritePokemons,
    loadPokemons,
    searchPokemonByName,
    loadFavoritePokemons,
    removeFavoritePokemons,
    addFavoritePokemons,
    nextUrl,
  };
  return (
    <PokemonsContext.Provider value={valueContext}>
      {children}
    </PokemonsContext.Provider>
  );
};
const getListPokemonDetailsByField = async (pokemons, field) => {
  const pokemonDetailList = [];
  for (const pokemonData of pokemons) {
    const pokemonDetail =
      field === "url"
        ? await getPokemonDetailsByUrlApi(pokemonData.url)
        : await getPokemonDetailsByIdApi(pokemonData);
    console.log("EEEEEAAAAApokemonDetail: ", pokemonDetail);
    pokemonDetailList.push({
      id: pokemonDetail.id,
      name: pokemonDetail.name,
      type: pokemonDetail.types[0]?.type?.name,
      order: pokemonDetail.order,
      image: pokemonDetail.sprites?.other["official-artwork"]?.front_default,
    });
  }
  return pokemonDetailList;
};
