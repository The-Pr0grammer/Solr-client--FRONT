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
import FlareContainer from "./FlareContainer.js";
import { useState, useEffect } from "react";
import { useIsFocused, navigate } from "@react-navigation/native";
import Login from "./Login";

function Explore({ navigation, route }, props) {
  const getFlares = () => {
    fetch("http://0.0.0.0:3000/flares")
      .then((resp) => resp.json())
      .then((fflares) => {
        updateFlares(fflares);
        dataHere(true);
      });
  };

  useEffect(() => {
    getFlares();
  }, []);

  useEffect(() => {
    if (route.params.newFlare) {
      updateFlares([...flares, route.params.newFlare]);
    }
  }, [route.params.newFlare]);

  useEffect(() => {
    const rr = navigation.addListener("focus", () => {
      forceRR(route.params.trigg);
    });

    return rr;
  }, [navigation]);

  const [flares, updateFlares] = useState([]);
  const [rrTrigger, forceRR] = useState(0);
  const [gotData, dataHere] = useState(false);

  return (
    <View>
      {/* {rrTrigger} */}
      <FlareContainer flares={flares} gotData={gotData} />
    </View>
  );
}
export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    bottom: 2,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    top: 4,
  },
  tabsDiv: {
    backgroundColor: "gold",
    height: 100,
    width: 150,
  },
});
