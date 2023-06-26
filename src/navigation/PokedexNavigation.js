import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
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
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTranslucent: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
