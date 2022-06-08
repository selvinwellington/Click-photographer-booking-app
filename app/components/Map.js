import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 13.059537,
        longitude: 80.242477,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      {/* <Marker
        coordinate={{
          latitude: 13.0644,
          longitude: 80.2338,
        }}
        image={require("../assets/mylocation.png")}
      /> */}
      <Marker
        coordinate={{
          latitude: 13.05689,
          longitude: 80.239351,
        }}
        image={require("../assets/map_marker.png")}
        title="Sony Digital "
        description="Just a click"
      />
      <Marker
        coordinate={{
          latitude: 13.06389,
          longitude: 80.237641,
        }}
        image={require("../assets/map_marker.png")}
      />
      <Marker
        coordinate={{
          latitude: 13.05989,
          longitude: 80.238351,
        }}
        image={require("../assets/map_marker.png")}
      />
      <Marker
        coordinate={{
          latitude: 13.061424,
          longitude: 80.244746,
        }}
        image={require("../assets/map_marker.png")}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
});

export default Map;

