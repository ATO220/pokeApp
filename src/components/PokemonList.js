import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import usePokemons from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { isFavoriteScreen } = props;

  const { loadPokemons, nextUrl, pokemonsList, favoritePokemons } =
    usePokemons();
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadMore = () => {
    loadPokemons();
  };

  let filtered = nextUrl && pokemonsList.length > 1;
  const styleFlatListContentContainer = {
    paddingBottom: isFavoriteScreen ? 35 : 0,
    marginTop: isFavoriteScreen ? 30 : 85,
    marginBottom: 30,
    ...styles.flatListContentContainer,
  };
  return (
    <FlatList
      data={isFavoriteScreen ? favoritePokemons : pokemonsList}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styleFlatListContentContainer}
      onEndReached={!isFavoriteScreen && filtered && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        !isFavoriteScreen &&
        filtered && (
          <ActivityIndicator
            color="#E74C3C"
            size="large"
            style={styles.spinner}
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 130,
  },
});
