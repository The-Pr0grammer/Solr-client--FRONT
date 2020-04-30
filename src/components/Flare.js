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
  let [interacts, interactsIncr] = useState(props.flare.interacts);
  let [modView, modViewToggle] = useState(false);

  useEffect(() => {
    fpostGlasses();
  }, [glasses]);

  // useEffect(() => {
  //   fpostGlasses();
  // }, [interacts]);

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
    <ImageBackground
      onPress={(props) => fireModal(props)}
      source={{
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRefmgcmYYjpgU7O1BlKfFqBBrTlQTkr4dkc8yZuqZWBzCDHrK&usqp=CAU",
      }}
      style={styles.container}
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
            {props.flare.image_url && (
              <Image
                style={styles.modalImage}
                source={{ uri: props.flare.image_url }}
              ></Image>
            )}
            <Text
              h3
              style={{
                color: "gold",
                justifyContent: "center",
                textAlign: "center",
                top: 50,
              }}
            >
              {props.flare.content}
            </Text>
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
      <Card title={"free real estate"}>
        <View style={styles.userDiv}>
          <Image
            style={styles.userPic}
            source={{ uri: props.flare.user.image_url }}
          ></Image>
          <Text h5 style={styles.username}>
            {props.flare.user.name}
          </Text>
          <Text h5 style={styles.location}>
            {props.flare.user.location}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            modViewToggle(!modView);
            interactsIncr(interacts + 1);
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
        {props.flare.image_url && (
          <Image
            style={styles.cardImg}
            source={{ uri: props.flare.image_url }}
          ></Image>
        )}
        <Text h5 style={styles.flareContent}>
          {props.flare.content}{" "}
        </Text>
        <View style={styles.glassesDiv}>
          <Text h4 style={styles.interactsCount}>
            🔗{interacts}
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
    </ImageBackground>
  );
}

export default Flare;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    bottom: 1,
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
  interactsCount: {
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
  userDiv: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "flex-start",
  },
  username: {
    flexDirection: "row",
    textAlign: "left",
    width: 100,
    height: 30,
  },
  userPic: {
    flexDirection: "row",
    backgroundColor: "gold",
    width: 40,
    height: 30,
    borderRadius: 18,
  },
  flareContent: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
  location: {
    flexDirection: "row",
    textAlign: "right",
    width: 160,
    height: 30,
    left: 40,
  },
});
