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
    this.playAnimation();
    this.setState({ loading: true });
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <ScrollView>
        {this.state.loading && (
          <View>
            {this.state.loading && (
              <View style={styles.animationContainer}>
                <Animation
                  ref={(animation) => (this.myAnimation = animation)}
                  style={{
                    top: 60,
                    width: 400,
                    height: 400,
                  }}
                  source={require("../images/9696-world-flat-color.json")}
                />
              </View>
            )}
          </View>
        )}
        <View>{this.renderFlares(this.props)}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 0,
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "100%",
    bottom: 2,
  },
});
