import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./AboutStack.js";
import HomeStack from "./HomeStack.js";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
