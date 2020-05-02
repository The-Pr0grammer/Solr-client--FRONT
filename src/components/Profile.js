import * as React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
} from "react-native-elements";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/ezgif-7-8a3ab76e99bc.gif")}
      >
      </ImageBackground>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
  }
});
