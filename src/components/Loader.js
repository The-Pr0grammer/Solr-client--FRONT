import * as React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import LottieView from "lottie-react-native";
import Animation from "lottie-react-native";

export default class Loader extends React.Component {
  state = {
    loading: true,
  };

  playAnimation = () => {
    this.myAnimation.play();
  };

  componentDidMount() {
    this.playAnimation();
    this.setState({ loading: true });
  }

  render() {
    return (
      <View>
        {this.state.loading && (
          <View style={styles.animationContainer}>
            <Animation
              ref={(animation) => (this.myAnimation = animation)}
              style={{
                top:40,
                width: 400,
                height: 400,
              }}
              source={require("../images/8572-liquid-blobby-loader.json")}
            />
          </View>
        )}
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
    bottom: 2,
  },
});
