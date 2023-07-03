import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
          headerTintColor: "#F92C00",
        }}
      />
      <Stack.Screen
        name="PokemonScreen"
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
