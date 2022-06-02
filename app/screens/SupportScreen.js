import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import HelpData from "./SupportData";

const HelpPage = () => {
  const [answer, setAnswer] = useState(true);

  return (
    // <React.StrictMode>
    <ScrollView style={{ backgroundColor: "#000080" }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainheader}>FAQ</Text>
        <View>
          {HelpData.map(({ id, question, Answer }) => {
            return (
              <View key={id} style={styles.Listcontainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{question}</Text>
                  <View style={styles.btn}>
                    <Pressable
                      onPress={() => {
                        setAnswer(!answer);
                      }}
                    >
                      {!answer ? (
                        <Ionicons name="add" size={25}></Ionicons>
                      ) : (
                        <Ionicons name="remove" size={25}></Ionicons>
                      )}
                    </Pressable>
                  </View>
                </View>
                <View style={styles.answer}>
                  {answer && <Text>{Answer}</Text>}
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <Text style={styles.mainheader}>Was this helpful?</Text>
          <TouchableOpacity style={styles.commandButton}>
            <Text style={styles.panelButtonTitle}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commandButton}>
            <Text style={styles.panelButtonTitle}>No</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
    // </React.StrictMode>
  );
};

export default HelpPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  mainheader: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  Listcontainer: {
    justifyContent: "space-between",
    marginTop: 30,
    padding: 10,
    backgroundColor: "#87ceeb",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // backgroundColor: "white",
    marginTop: 20,
    borderRadius: 5,
  },
  btn: {
    width: 25,
    alignItems: "center",
    height: 25,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 50,
  },
  answer: {
    backgroundColor: "#87ceeb",
  },
  commandButton: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    margin: 10,
    color: "#000080",
    // marginLeft: 70,
    // marginRight: 70,
  },
});
