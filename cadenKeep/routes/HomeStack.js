import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen.js";
import KeepScreen from "../screens/KeepScreen.js";
import Header from "../components/header.js";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  KeepScreen: {
    screen: KeepScreen,
    navigationOptions: {
      title: "Notes",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default HomeStack;
