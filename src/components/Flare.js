import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
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
import Constants from "expo-constants";

function Flare(props) {
  console.log(props.flare);
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

  function Response({ title }) {
    return (
      <View style={styles.item}>
        <Text h4 style={styles.title}>
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View
      onPress={(props) => fireModal(props)}
      style={{ backgroundColor: "black" }}
    >
      <View style={{ flex: 1 }}>
        <Modal isVisible={modView}>
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              onPress={() => {
                modViewToggle(!modView);
              }}
              style={styles.backButton}
            >
              <Text h3 style={{ left: 5 }}>
                🔙
              </Text>
            </TouchableHighlight>
            <Text
              h3
              style={{
                color: "gold",
                justifyContent: "center",
                textAlign: "center",
                top: 50,
              }}
            >
              {props.flare.title}
            </Text>
            <Image
              style={styles.modalImage}
              source={{ uri: props.flare.image_url }}
            ></Image>
            <SafeAreaView style={styles.respDiv}>
              <FlatList
                data={props.flare.responses}
                renderItem={({ item }) => <Response title={item.content} />}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
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
            left: 156,
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
          <Text h4 style={styles.viewsCount}>
            👀{views}
          </Text>
          <Text h4 style={styles.glassesCount}>
            {glasses}
          </Text>
          <TouchableOpacity
            onPress={() => {
              glassesIncr(glasses + 1);
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
  viewsCount: {
    flexDirection: "row",
    textAlign: "left",
    left: 40,
    width: 180,
  },
  backButton: {
    backgroundColor: "gold",
    top: 40,
    width: 50,
    height: 45,
    borderRadius: 32,
    alignContent: "center",
  },
  respDiv: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    top: 30,
    height: "40%",
  },
  item: {
    backgroundColor: "aqua",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  modalImage: {
    top: 50,
    height: "30%",
    width: "100%",
  },
});
