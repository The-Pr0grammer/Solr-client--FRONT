import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Login from "./Login.js";
import Explore from "./Explore.js";
import FlareForm from "./FlareForm.js";
import Profile from "./Profile.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const Tab = createMaterialBottomTabNavigator();

function Nav() {
  return (
    <Tab.Navigator
      labelStyle={{ fontSize: 170, top: 0 }}
      shifting={false}
      activeColor={"gold"}
      inactiveColor={"black"}
      tabBarIcon={{ focused: true, color: "blue" }}
      tabBarColor={"black"}
      initialRouteName={"Explore"}
      tabPress
      size={30}
    >
      <Tab.Screen
        name="FFExplore"
        component={FlareForm}
        options={{
          forceTitlesDisplay: true,
          bottomTabs: {
            titleDisplayMode: "alwaysShow",
          },
          tabBarLabel: "Shoot",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flare"
              color={"orangered"}
              style={{
                fontSize: 38,
                width: 70,
                height: 60,
                bottom: 13,
                left: 16,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          forceTitlesDisplay: true,
          bottomTabs: {
            titleDisplayMode: "alwaysShow",
          },
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="pulse"
              color={"springgreen"}
              style={{
                fontSize: 46,
                width: 70,
                height: 60,
                bottom: 13,
                left: 9,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Nav}
        options={{
          forceTitlesDisplay: true,
          bottomTabs: {
            titleDisplayMode: "alwaysShow",
          },
          tabBarLabel: "Saved",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="content-save"
              color={"coral"}
              style={{
                fontSize: 36,
                width: 70,
                height: 60,
                bottom: 11,
                left: 18,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          forceTitlesDisplay: true,
          bottomTabs: {
            titleDisplayMode: "alwaysShow",
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-card-details"
              color={"darkblue"}
              style={{
                fontSize: 38,
                width: 70,
                height: 60,
                bottom: 11,
                left: 16,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Nav;
