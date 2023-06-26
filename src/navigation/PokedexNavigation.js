import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "transparent" },
        }}
      />
    </Stack.Navigator>
  );
}
