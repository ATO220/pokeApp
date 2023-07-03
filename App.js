import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/context/AuthContext";
import { PokemonsProvider } from "./src/context/PokedexContext";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <PokemonsProvider>
        <AuthProvider>
          <StatusBar
            style="auto"
            translucent={true}
            backgroundColor="transparent"
          />
          <Navigation />
        </AuthProvider>
      </PokemonsProvider>
    </NavigationContainer>
  );
}
