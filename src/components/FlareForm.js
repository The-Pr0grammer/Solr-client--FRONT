import * as React from "react";
import { useState, useEffect } from "react";
import { useIsFocused, route, setParams } from "@react-navigation/native";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  TouchableHighlight,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import {
  ThemeProvider,
  Button,
  Icon,
  Text,
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage,
} from "react-native-elements";
import Loader from "./Loader.js";

function FlareForm({ navigation }, props) {
  const shootFlare = async () => {
    toggleLoading(!loading);
    onChangeText(" ");
    setIsEnabled(false);
    setModalVisible(false);
    onChangeImgURL("Enter a URL");

    await navigation.setParams({
      trigggggg: Math.random(),
    });

    fetch("http://0.0.0.0:3000/flares", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user_id: 1,
        interacts: 0,
        content: value,
        image_url: imgURL,
        ["😎"]: 0,
        purpose: "new-flare",
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then((res) => navigation.navigate("Explore", { newFlare: res }))
      .catch(function (res) {
        console.log(res.json());
      });
  };

  useEffect(() => {
    const rr = navigation.addListener("focus", () => {
      setModalVisible(true);
      toggleLoading(false);
      onChangeText(undefined);
      onChangeImgURL(undefined);
    });
  });

  const [modalVisible, setModalVisible] = useState(true);
  const [loading, toggleLoading] = useState(false);
  const isFocused = useIsFocused();
  const [value, onChangeText] = React.useState(" ");
  const [imgURL, onChangeImgURL] = React.useState(" ");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    // onChangeImgURL(" ");
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View>
      {loading && <Loader />}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.flareTextPrompt}>
            What do you want your flare to say?
          </Text>
          <TextInput
            defaultValue="Hello World?"
            multiline
            numberOfLines={5}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={styles.flareText}
            textAlign={"center"}
            selectionColor={"magenta"}
            onFocus={() => {
              !value && onChangeText(" ");
            }}
            onBlur={() => {
              value === " " && onChangeText(undefined);
            }}
          />

          <View style={{ justifyContent: "center", top: 60 }}>
            <Text style={styles.flareImgPrompt}>
              Do you want to include an image?
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ top: 146, left: 198 }}
            />
          </View>
          {isEnabled && (
            <TextInput
              defaultValue="Enter a URL"
              numberOfLines={1}
              onChangeText={(imgURL) => onChangeImgURL(imgURL)}
              value={imgURL}
              style={styles.imgURL}
              textAlign={"center"}
              selectionColor={"magenta"}
              onFocus={() => {
                !imgURL && onChangeImgURL(" ");
              }}
              onBlur={() => {
                imgURL === " " && onChangeImgURL(undefined);
              }}
            />
          )}

          <TouchableHighlight
            underlayColor="chartreuse"
            style={styles.shootButton}
            onPress={shootFlare}
          >
            <Text style={styles.sButtonText}>Shoot Flare</Text>
          </TouchableHighlight>

          <Icon
            name="flare"
            type="material-community"
            color="orangered"
            size={45}
            top={253}
          />
        </View>
      </View>
    </View>
  );
}
export default FlareForm;

const styles = StyleSheet.create({
  centeredView: {
    height: "100%",
    backgroundColor: "gold",
  },
  modalView: {
    height: 450,
    borderRadius: 50,
    padding: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flareTextPrompt: {
    width: 310,
    top: 198,
    textAlign: "center",
    fontSize: 24,
    color: "magenta",
  },
  flareImgPrompt: {
    width: 310,
    top: 175,
    textAlign: "center",
    fontSize: 24,
    color: "magenta",
  },
  sButtonText: {
    top: 10,
    textAlign: "center",
    color: "orangered",
    fontSize: 18,
  },

  shootButton: {
    top: 300,
    backgroundColor: "dodgerblue",
    borderRadius: 30,
    height: 75,
    width: 130,
  },
  sButtonDiv: {
    bottom: 230,
  },
  flareText: {
    top: 220,
    left: 2,
    fontSize: 32,
    height: 200,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "orange",
  },
  imgURL: {
    position: "absolute",
    height: 55,
    width: 350,
    top: 540,
    borderColor: "gray",
    borderRadius: 26,
    backgroundColor: "orange",
    fontSize: 32,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
