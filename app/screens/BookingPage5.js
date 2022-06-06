import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function BookingPage5({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>When do you need these services?</Text>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}>Within this month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}>In next 2-3 months</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}>In next 3-6 months</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}> After around 6 months</Text>
      </TouchableOpacity>

      <View style={styles.logo}>
        <Image
          style={styles.logo}
          source={require("../assets/camera.gif")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commandButton: {
    padding: 15,
    borderRadius: 10,
    // backgroundColor: "#FF6347",
    backgroundColor: "gray",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 70,
    marginRight: 70,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    margin: 20,
  },

  logo: {
    width: 400,
    height: 200,
    align: "center",
    resizeMode: "contain",
  },
  background: {
    backgroundColor: "white",
  },
});
