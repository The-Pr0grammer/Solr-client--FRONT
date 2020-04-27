import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login.js";
import Explore from "./src/components/Explore.js";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    flares:[]
  }

  componentDidMount() {
    
    fetch("192.168.1.183/flares")
    .then(resp => resp.json())
    .then(resp => this.setState({flares:resp}))
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      });
  }

  render() {
    console.log(this.state.flares)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Explore" component={Explore}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

