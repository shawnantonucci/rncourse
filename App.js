import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  listContainer: {
    width: "100%"
  }
});