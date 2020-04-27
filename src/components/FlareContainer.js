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

const renderFlares = (props) => {
    console.log(props)
}

function FlareContainer({ navigation }) {
    return (
<ScrollView >
      {renderFlares()}
</ScrollView>
    )}

export default FlareContainer 

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
    }
  });

  