import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  TouchableHighlight,
  Alert,
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
import FlareContainer from "./FlareContainer.js";
import { useState, useEffect } from "react";

function FlareForm({ navigation }, props) {
  const getFlares = () => {
    fetch("http://0.0.0.0:3000/flares")
      .then((resp) => resp.json())
      .then((fflares) => updateFlares(fflares));
  };

  const [modalVisible, setModalVisible] = useState(true);
  const someFunction = () => {};

  let [flares, updateFlares] = useState([]);

  useEffect(() => {
    getFlares();
  }, []);

  return (
    <View style={styles.centeredView}>
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
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "red" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <FlareContainer flares={flares} />
    </View>
  );
}
export default FlareForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: "100%",
    bottom: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    height: 50,
  },
  modalView: {
    height:"100%",
    margin: 50,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 200,
    },
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
