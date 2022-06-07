import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import { TouchableWithoutFeedback, Button } from "react-native";
// import

export default function WelcomeScreen({ navigation }) {
  //   const pressHandler = () => {
  //     // console.log("clicked");
  //     navigation.navigate("LoginScreen");
  //   };
  const [loaded, setLoaded] = React.useState(true);
  setTimeout(() => {
    setLoaded(false);
  }, 2500);

  return (
    <>
      {loaded ? (
        <View style={styles.full}>
          <Image
            style={styles.pop}
            source={require("../assets/pop-up.gif")}
          ></Image>
        </View>
      ) : (
        <ImageBackground
          style={styles.background}
          source={require("../assets/backgroundimg.webp")}
        >
          <View style={styles.logoContainer}>
            {/* <Image
              style={styles.logo}
              source={require("../assets/Black.png")}
            ></Image> */}

            <Text style={styles.welcomeText}>
              Capture every moment in life with one {" "}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                CLICK
              </Text>
            </Text>
          </View>
          <View style={styles.loginbutton}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <Text style={styles.loginText}>User</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.registerbutton}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Phlogin");
              }}
            >
              <Text style={styles.registerText}>Photographer</Text>
            </TouchableWithoutFeedback>
          </View>

          {/* <View style={styles.registerbutton}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("RegistrationScreen");
          }}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableWithoutFeedback>
      </View> */}
        </ImageBackground>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginbutton: {
    width: 200,
    height: 50,
    backgroundColor: "#f0f8ff",
    borderRadius: 20,
    marginBottom: 10,
  },
  loginText: {
    textAlign: "center",
    paddingTop: 15,
  },
  registerbutton: {
    width: 200,
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 20,
    marginBottom: 10,
  },

  registerText: {
    color: "#f0f8ff",
    textAlign: "center",
    paddingTop: 15,
  },

  logoContainer: {
    position: "absolute",
    top: 50,
    width: "100%",
    alignItems: "center",
    fontSize: 15,
  },
  logo: {
    width: 300,
    height: 150,
  },
  pop: {
    width: 400,
    height: 400,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  full: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  welcomeText: {
    margin: 20,
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "black",
    width: 300,
  },
});
