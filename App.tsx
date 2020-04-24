import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
} from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./src/images/f99ce9455f26958b1d98f21abfc9ac0f.gif")}
      >
        <View>
          <Image
            style={styles.logo}
            source={require("./src/images/imageedit_2_6812498525.png")}
          ></Image>
        </View>
        <View style={styles.inputView1}>
          <Input placeholder="username" style={styles.input} />
        </View>
        <View style={styles.inputView2}>
          <Input placeholder="password" style={styles.input} />
        </View>
        <View style={styles.loginBottom}></View>
        <NavigationContainer>
        <Button style={styles.loginButton} title="Log in" />
        <Text h6 style={styles.signupMess}>
            Don't have an account? Sign up for free.
        </Text>
          </NavigationContainer>
      </ImageBackground>
    </View>
  );
}

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
  inputView1: {
    position: "absolute",
    top: 435,
    left: "24%",
    justifyContent: "center",
    width: "50%",
    borderRadius: 10,
    backgroundColor: "gold",
  },
  inputView2: {
    position: "absolute",
    top: 495,
    left: "24%",
    justifyContent: "center",
    width: "50%",
    borderRadius: 10,
    backgroundColor: "gold",
  },
  input: {
    backgroundColor: "#3f51b5",
    color: "green",
  },
  loginBottom: {
    position: "absolute",
    justifyContent: "center",
    top: 700,
    left: 100,
    backgroundColor: "gold",
    height: 2,
    width: 205,
  },
  logo: {
    position: "absolute",
    bottom: 10,
    left: "4%",
    justifyContent: "center",
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  loginButton: {
    position: "absolute",
    justifyContent: "center",
    top: 115,
    left: 140,
    height: 100,
    width: 120,
  },
  signupMess: {
    position: "absolute",
    justifyContent: "center",
    color: "gold",
    top: 720,
    left: 70,
  },
});
