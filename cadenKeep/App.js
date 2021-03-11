import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "./styles/global.js";
import Navigator from "./routes/drawer.js";
export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
}
