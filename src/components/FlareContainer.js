import React from "react";
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
  Text,
  Card,
} from "react-native-elements";
import Flare from "./Flare.js";
import {
  createMaterialBottomTabNavigator,
  NavigationContainer,
} from "@react-navigation/material-bottom-tabs";
import { Icon } from "native-base";

import Login from "./Login";
import Explore from "./Explore";
import Animation from "lottie-react-native";

export default class FlareContainer extends React.Component {
  state = {
    loading: true,
  };

  renderFlares = (props) => {
    return props.flares.map((flare) => <Flare key={flare.id} flare={flare} />);
  };

  playAnimation = () => {
    this.myAnimation.play();
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.playAnimation();
  }

  componentWillReceiveProps() {
    {
      this.props.gotData && this.setState({ loading: !this.props.gotData });
    }
  }

  render() {
    console.log("loading:", this.state.loading);
    console.log("gotData:", this.props.gotData);
    return (
      <View style={styles.animationContainer}>
        {this.state.loading && !this.props.gotData && (
          <View>
            <Animation
              ref={(animation) => (this.myAnimation = animation)}
              style={{
                top: 77,
                width: 400,
                height: 400,
              }}
              source={require("../images/9696-world-flat-color.json")}
            />
          </View>
        )}

        <ScrollView>
          <View>{this.renderFlares(this.props)}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 0,
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "100%",
  },
});
