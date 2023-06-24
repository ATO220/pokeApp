import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getPokemonDetailsByIdApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Type from "../components/Pokemon/Type";
import { getColorByPokemonType } from "../utils/getColorByPokemonType";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  const [colorByType, setColorByType] = useState(null);

  useEffect(() => {
    if (navigation) {
      navigation.setOptions({
        headerLeft: () => (
          <Icon
            name="arrow-back-outline"
            color="#fff"
            size={30}
            style={{ marginLeft: 20 }}
            onPress={navigation.goBack}
          />
        ),
      });
    }
  }, [navigation, params]);
  useEffect(() => {
    (async () => {
      try {
        const pokemonDetail = await getPokemonDetailsByIdApi(params.id);
        const colorPokemonByType = getColorByPokemonType(
          pokemonDetail.types[0].type.name
        );
        setPokemon(pokemonDetail);
        setColorByType(colorPokemonByType);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon || !colorByType) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        id={pokemon.id}
        type={pokemon.types[0].type.name}
        image={pokemon.sprites.other["official-artwork"].front_default}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} colorByType={colorByType} />
    </ScrollView>
  );
}
