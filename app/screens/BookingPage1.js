import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";


export default function BookingPage1({navigation}) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>What kind of photographer you require?</Text>

      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage2")}
      >
        <Text style={styles.panelButtonTitle}>Budget</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage2")}
      >
        <Text style={styles.panelButtonTitle}>Standard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => navigation.navigate("BookingPage2")}
      >
        <Text style={styles.panelButtonTitle}>Premium</Text>
      </TouchableOpacity>
      <View style={styles.logo}>
        <Image
          style={styles.logo}
          source={require("../assets/photographer-setup.gif")}
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
    backgroundColor:"black",
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

  logo:{
      width:400,
      height:300,
      align: "center",
      
  },
  background:{
      backgroundColor:"white",
  }
});
