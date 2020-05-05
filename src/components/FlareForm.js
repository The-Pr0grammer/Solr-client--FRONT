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
  Input,
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
// import { set } from "react-native-reanimated";
// import AnimatedLoader from "react-native-animated-loader";

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
      .then(
        (res) => navigation.navigate("Explore", { newFlare: res })
        //
      ) //change loading bool
      .catch(function (res) {
        // console.log(res.json());
      });
  };

  useEffect(() => {
    const rr = navigation.addListener("focus", () => {
      setModalVisible(true);
      toggleLoading(false);
    });
  });

  const [modalVisible, setModalVisible] = useState(true);
  const [loading, toggleLoading] = useState(false);
  const isFocused = useIsFocused();
  const [value, onChangeText] = React.useState(" ");
  const [imgURL, onChangeImgURL] = React.useState("Enter a URL");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    onChangeImgURL("Enter a URL");
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View>
      <Loader/>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.flareTextPrompt}>
              What do you want your flare to say?
            </Text>
            <TextInput
              multiline
              numberOfLines={5}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={styles.flareText}
              textAlign={"center"}
              selectionColor={"magenta"}
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
                numberOfLines={1}
                onChangeText={(imgURL) => onChangeImgURL(imgURL)}
                value={imgURL}
                style={styles.imgURL}
                textAlign={"center"}
                selectionColor={"magenta"}
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

            <TouchableHighlight
              underlayColor="brown"
              style={styles.cancelButton}
              onPress={() => {
                setModalVisible(false);
                navigation.goBack();
                onChangeText(" ");
                setIsEnabled(false);
                onChangeImgURL("Enter a URL");
              }}
            >
              <View style={styles.cButtonDiv}>
                <Text style={styles.cButtonText}>Cancel</Text>
                <Icon
                  name="close"
                  type="material-community"
                  color="crimson"
                  size={45}
                  top={3}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
    top: 135,
    // margin: 50,
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

  cButtonText: {
    top: 10,
    textAlign: "center",
    color: "tan",
    fontSize: 18,
  },
  cancelButton: {
    bottom: 440,
    left: 145,
    backgroundColor: "brown",
    borderRadius: 80,
    height: 70,
    width: 70,
    marginBottom: 20,
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
    top: 450,
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
