import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center", headerTransparent: true }}
    >
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerTintColor: "#fefefe",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
