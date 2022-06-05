import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function BookingPage2({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Photography/Videography required for:</Text>

      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}>1 day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}>2 days</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}>3 days</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage3")}
      >
        <Text style={styles.panelButtonTitle}> More than 3 days </Text>
      </TouchableOpacity>
      <View style={styles.logo}>
        <Image
          style={styles.logo}
          source={require("../assets/calendar.gif")}
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
    backgroundColor: "#00bfff",
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
    height: 300,
    align: "center",
  },
  background: {
    backgroundColor: "white",
  },
});
