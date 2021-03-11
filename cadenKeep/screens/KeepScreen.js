import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../styles/global.js";

export default function KeepScreen({ navigation }) {
  return (
    <View style={GlobalStyles.keepContainer}>
      <Text style={GlobalStyles.keepTitle}>{navigation.getParam("title")}</Text>
      <Text style={GlobalStyles.keepBody}>{navigation.getParam("body")}</Text>
    </View>
  );
}
