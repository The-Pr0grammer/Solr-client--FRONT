import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
  Card,
} from "react-native-elements";
import { useState, useEffect } from "react";
import Modal from "react-native-modal";

function Flare(props) {
  const fpostGlasses = () => {
    fetch(`http://0.0.0.0:3000/flares/${props.flare.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ "😎": glasses }),
    }).catch(function (res) {
      console.log(res);
    });
  };

  let [glasses, glassesIncr] = useState(props.flare["😎"]);
  let [views, viewsIncr] = useState(props.flare.views);
  let [modView, modViewToggle] = useState(false);

  useEffect(() => {
    fpostGlasses();
  }, [glasses]);

  // useEffect(() => {
  //   fpostGlasses();
  // }, [views]);

  fireModal = (props) => {
    return <ModalFlare flare={props.flare} />;
  };

  // console.log(glasses);
  return (
    <View
      onPress={(props) => fireModal(props)}
      style={{ backgroundColor: "black" }}
    >
      <View style={{ flex: 1 }}>
        <Modal isVisible={modView}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableHighlight
              onPress={() => {
                modViewToggle(!modView);
              }}
            >
              <Text h3 style={styles.backButton}>
                🔙
              </Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
      <Card title={props.flare.title}>
        <TouchableOpacity
          onPress={() => {
            modViewToggle(!modView);
            viewsIncr(views + 1);
          }}
          style={{
            flexDirection: "row",
            backgroundColor: "#1357BE",
            width: 40,
            bottom: 2,
            borderRadius: 25,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>💬</Text>
        </TouchableOpacity>
        <Image
          style={styles.cardImg}
          source={{ uri: props.flare.image_url }}
        ></Image>
        <Text h5 style={{ marginBottom: 10 }}>
          {props.flare.content}{" "}
        </Text>
        <View style={styles.glassesDiv}>
          <Text h4 style={styles.glassesCount}>
            {views}
          </Text>
          <Text h4 style={styles.glassesCount}>
            {glasses}
          </Text>
          <TouchableOpacity
            onPress={() => {
              glassesIncr(glasses + 1);
              viewsIncr(views + 1);
            }}
            style={{
              flexDirection: "row",
              backgroundColor: "#1357BE",
              width: 40,
              bottom: 2,
              borderRadius: 25,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", justifyContent: "center" }} h4>
              😎
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

export default Flare;

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
  cardImg: {
    height: 200,
    width: "100%",
  },
  glassesDiv: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "flex-end",
    left: 218,
  },
  glassesCount: {
    flexDirection: "row",
    textAlign: "right",
    width: 180,
  },
  backButton: {
    backgroundColor: "gold",
    width: 100,
    height: 200,
  },
});
