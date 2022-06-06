import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function BookingPage4({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Your total budget:</Text>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage5")}
      >
        <Text style={styles.panelButtonTitle}>Less than ₹ 50,000</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage5")}
      >
        <Text style={styles.panelButtonTitle}>₹ 50,000 - 1L</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage5")}
      >
        <Text style={styles.panelButtonTitle}>₹ 1L - 1.5L</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage5")}
      >
        <Text style={styles.panelButtonTitle}> ₹ 1.5L - 2L </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage5")}
      >
        <Text style={styles.panelButtonTitle}> ₹ 2L - 2.5L </Text>
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
    backgroundColor: "#696969",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 70,
    marginRight: 70,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
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
