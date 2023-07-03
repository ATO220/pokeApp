import { size } from "lodash";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useAuth from "../../hooks/useAuth";
import usePokemons from "../../hooks/usePokemons";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);
  const { favoritePokemons, loadFavoritePokemons } = usePokemons();

  useEffect(() => {
    (async () => {
      await loadFavoritePokemons();
    })();
  }, []);

  useEffect(() => {
    try {
      setTotal(size(favoritePokemons));
    } catch (error) {
      setTotal(0);
    }
  }, [favoritePokemons]);

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <Button title="Desconectarse" onPress={logout} style={styles.btnLogoun} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});
