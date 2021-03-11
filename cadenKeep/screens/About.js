import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../styles/global.js";
import { MaterialIcons } from "@expo/vector-icons";

export default function About() {
  return (
    <View style={GlobalStyles.aboutContainer}>
      <Text style={GlobalStyles.aboutTitle}>Developed by:</Text>
      <Text style={GlobalStyles.aboutMain}> Caden Development</Text>
      <Text style={[GlobalStyles.aboutCenter, GlobalStyles.made]}>
        Made with
        <MaterialIcons
          style={GlobalStyles.favorite}
          name="favorite"
          size={16}
        />
        by
      </Text>
      <Text style={[GlobalStyles.aboutCenter, GlobalStyles.font]}>
        Prithvirajsinh Jadav
      </Text>
      <Text style={[GlobalStyles.aboutCenter, GlobalStyles.font]}>&</Text>
      <Text style={[GlobalStyles.aboutCenter, GlobalStyles.font]}>
        Gautam Bhambhariya
      </Text>
    </View>
  );
}
