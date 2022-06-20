import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}> CLICK </Text>
        <Text style={styles.paraStyle}> Version 1.0 </Text>

        <View>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
          ></Image>
        </View>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About US </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            The project involves hiring/booking photographers in the nearby
            surroundings or their studios based on availability of the
            photographer for any existing event by looking into their profile ,
            rating and checking out their work and booking them for fair price
            through a Mobile Application. Photographers can sign up to the app
            and create a profile so that people in and around can know about
            them and hire them when needed.
          </Text>
        </View>
        <View style={styles.Layout2}>
          <Text style={styles.aboutSubHeader}> Career opportunities</Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            With the boom in advertising, media and the fashion industry,
            photography has emerged as a lucrative and thrilling career option
            to many of Indian youths. Until some years ago the masses regarded
            photography as a hobby profession only, but now it has now emerged
            in a big way.
          </Text>
        </View>

        <Text style={styles.mainHeader}> Follow me on Social Network </Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/thapatechnical/")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              )
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "700",
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  Layout2: {
    backgroundColor: "#000000",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    textAlign: "justify",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default AboutScreen;
