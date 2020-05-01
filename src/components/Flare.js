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

  function Response(rsp) {
    console.log(rsp.title);
    return (
      <View style={styles.item}>
        <Text h4 style={styles.response}>
          {rsp.title.content}
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
              <View style={styles.modImgDiv}>
                <Image
                  resizeMode={"contain"}
                  style={styles.modalImage}
                  source={{ uri: props.flare.image_url }}
                ></Image>
              </View>
            )}

            <Text
              h3
              style={{
                top: 50,
                color: "gold",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {props.flare.content}
            </Text>
            <SafeAreaView style={styles.respDiv}>
              <FlatList
                data={props.flare.responses}
                renderItem={({ item }) => <Response title={item} />}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>
        </Modal>
      </View>
      <Card>
        <View style={styles.userDiv}>
          <Image
          resizeMode={"cover"}
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
        {props.flare.image_url && (
          <View style={styles.imgDiv}>
            <Image
              resizeMode={"contain"}
              style={styles.cardImg}
              source={{ uri: props.flare.image_url }}
            ></Image>
          </View>
        )}
        <Text h5 style={styles.flareContent}>
          {props.flare.content}{" "}
        </Text>
        <View style={styles.interactionssDiv}>
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
              left:40,
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
            right:"120%"
          }}
        >
          <Text>💬</Text>
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
  imgDiv: {
    resizeMode: "cover",
    justifyContent: "center",
    height: 314,
    width: "100%",
  },
  cardImg: {
    flex: 5,
    resizeMode: "cover",
    justifyContent: "center",
    top: 10,
    right: 7,
    height: "100%",
    width: 366,
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
    width: 180,√
  },
  interactionsDiv: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "flex-end",
    left: 218,
  },
  backButton: {
    backgroundColor: "gold",
    top: 25,
    width: 50,
    height: 45,
    borderRadius: 32,
    alignContent: "center",
  },
  respDiv: {
    marginTop: Constants.statusBarHeight,
    top: 20,
    height: "50%",
  },
  item: {
    backgroundColor: "aqua",
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  modImgDiv: {
    top: 20,
    height: 350,
    width: "100%",
  },
  modalImage: {
    top: 25,
    height: "100%",
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
    left:3
  },
  userPic: {
    flexDirection: "row",
    backgroundColor: "gold",
    width: 50,
    height: 45,
    borderRadius: 20,
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
