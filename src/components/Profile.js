import * as React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
} from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/ezgif-7-8a3ab76e99bc.gif")}
      >
        <View>
          <Image
            style={styles.logo}
            source={require("../images/imageedit_2_6812498525.png")}
          ></Image>
        </View>
        <View style={styles.inputView1}>
          <Input placeholder="username" style={styles.input} />
        </View>
        <View style={styles.inputView2}>
          <Input placeholder="password" style={styles.input} />
        </View>
        <View style={styles.loginBottom}></View>

        <Button
          style={styles.loginButton}
          title="Log in"
          onPress={() => navigation.navigate("Nav")}
        />
        <Text h6 style={styles.signupMess}>
          Don't have an account? Sign up for free.
        </Text>
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
