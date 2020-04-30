import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login.js";
import Explore from "./Explore.js";

const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

export default Nav;
