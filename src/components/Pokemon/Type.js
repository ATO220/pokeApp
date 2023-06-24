import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { capitalize, map } from "lodash";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types } = props;
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            ...{ backgroundColor: getColorByPokemonType(item.type.name) },
          }}
        >
          <Text style={styles.name}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  name: {
    color: "white",
    fontWeight: "600",
  },
});
