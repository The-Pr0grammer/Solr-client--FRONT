import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Login from "./Login.js";
import Explore from "./Explore.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const Tab = createMaterialBottomTabNavigator();

function Nav() {
  return (
    <Tab.Navigator
      activeColor={"gold"}
      tabBarIcon={{ focused: true, color: "blue" }}
      tabBarColor={"black"}
      tabPress
      size={50}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="pulse"
              color={"green"}
              style={{ fontSize: 46, width: 70, height: 60 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "midStarFourPoints",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="midStarFourPoints" color={"green"} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Nav;
