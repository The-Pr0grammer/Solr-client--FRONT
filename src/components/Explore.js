import * as React from 'react';
import { View,ScrollView,StyleSheet,Image, ImageBackground} from 'react-native';
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
  Card
} from "react-native-elements";
import FlareContainer from "./FlareContainer.js";

function Explore({ navigation },props) {
  return (
      <View>
    
      <Button style={styles.ExploreButton} title="Back to Login" onPress={() => navigation.navigate('Login')} />
     
      <FlareContainer/>
  </View>
  );
}
export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    top: 4,
  },
  ExploreButton: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    top: 115,
    right:1,
    height: 100,
    width: 120,
  }
});

