import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AccountScreen from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
          headerTintColor: "red",
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ fontSize: 10, color: !focused ? color : "#F92C00" }}>
              Favoritos
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name="heart-half-outline"
              color={!focused ? color : "#F92C00"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitle: "Mi cuenta",
          headerTintColor: "rgb(1,122,255)",
          tabBarLabel: "Mi cuenta",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const renderPokeball = () => (
  <Image
    source={require("../assets/pokeball.png")}
    style={{ width: 75, height: 75, top: -15 }}
  />
);
