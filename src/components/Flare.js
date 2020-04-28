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

function Flare(props) {
  console.log(props.flare.image_url);
  return (
    <View>
      <Card title={props.flare.title}>
        <Image
          style={styles.cardImg}
          source={{ uri: props.flare.image_url }}
        ></Image>
        <Text style={{ marginBottom: 10 }}>{props.flare.content} </Text>
        <View>
        <Button
          buttonStyle={{
            width: 50,
            left: 300,
            borderRadius: 25,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
          }}
          title="😎"
        />
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
});
