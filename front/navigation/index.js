import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Welcome from "../screens/welcome";
import Settings from "../screens/settings";
import Product from "../screens/product";
import Login from "../screens/login";
import Explore from "../screens/explore";
import Browse from "../screens/browse";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Settings,
    Product,
    Login,
    Explore,
    Browse,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
