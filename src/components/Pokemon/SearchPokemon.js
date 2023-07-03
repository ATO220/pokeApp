import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import usePokemons from "../../hooks/usePokemons";

const SearchPokemon = () => {
  const { searchPokemonByName } = usePokemons();
  const [typingTimeout, setTypingTimeout] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (searchTerm) {
      const newTypingTimeout = setTimeout(() => {
        // Realizar la acción después de 2 segundos de inactividad
        searchPokemonByName(searchTerm);
      }, 2000);

      setTypingTimeout(newTypingTimeout);
    }

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [searchTerm]);

  const handleInputChange = (inputText) => {
    setSearchTerm(inputText);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        zIndex: 100000,
        position: "absolute",
        width: "100%",
        top: 40,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Buscar Pokémon por nombre"
        onFocus={handleFocus}
        onBlur={handleBlur}
        selectionColor="#00D4FF"
        onChangeText={handleInputChange}
        value={searchTerm}
        style={[styles.searchContentContainer, focused && styles.inputFocused]}
      />
    </SafeAreaView>
  );
};

export default SearchPokemon;
const styles = StyleSheet.create({
  searchContentContainer: {
    width: "80%",
    borderWidth: 2,
    height: 30,
    borderColor: "#9f9f9f",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  inputFocused: {
    borderColor: "#00D4FF",
  },
});
