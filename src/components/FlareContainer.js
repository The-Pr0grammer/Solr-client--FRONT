import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
  Card,
} from "react-native-elements";
import Flare from "./Flare.js";

const renderFlares = (props) => {
  return props.flares.map((flare) => <Flare key={flare.id} flare={flare} />);
};

function FlareContainer(props) {
  console.log("our props", props.flares);
  return <ScrollView>{renderFlares(props)}</ScrollView>;
}

export default FlareContainer;

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
});
