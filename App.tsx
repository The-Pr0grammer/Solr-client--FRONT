import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login.js";
import Explore from "./src/components/Explore.js";
import Nav from "./src/components/Nav.js";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Nav" component={Nav} />
          <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
