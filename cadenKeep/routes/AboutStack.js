import { createStackNavigator } from "react-navigation-stack";
import Header from "../components/header.js";
import React from "react";
import About from "../screens/About.js";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default AboutStack;
