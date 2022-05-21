import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import MapView from "react-native-maps";

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map />
    </SafeAreaView>
  );
};

export default MapScreen;
