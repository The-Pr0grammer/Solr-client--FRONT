import * as React from 'react';
import { View,ScrollView,StyleSheet,Image, ImageBackground} from 'react-native';
import {
  Input,
  ThemeProvider,
  Button,
  Icon,
  Text,
  Card
} from "react-native-elements";

function Flare({ navigation }) {
    return (
        <View>
      <Card
  title='Test flare 🔥'
  image={require("../images/imageedit_2_6812498525.png")}>
  <Text style={{marginBottom: 10}}>
This should be made into a component. Then these cards should be in a scrollable view. Styling needed for smaller, wider cards
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>
    )}

export default Flare

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
    }
  });

  