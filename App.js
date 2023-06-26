import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        style="auto"
        translucent={true}
        backgroundColor="transparent"
      />
      <Navigation />
    </NavigationContainer>
  );
}
