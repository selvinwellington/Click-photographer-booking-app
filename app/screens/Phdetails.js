import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import COLORS from "../conts/colors";
import { FloatingAction } from "react-native-floating-action";

export default function Phdetails({ navigation }) {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../assets/studio2.webp")}
      ></Image>
      <Text style={{ fontWeight: "bold", color: COLORS.grey, padding: 15 }}>
        My Works
      </Text>
      {/* <Text>Floating Action example</Text>  */}
      
      <FloatingAction
        style={{ position: "absolute", bottom: 10, right: 10 }}
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
          navigation.navigate(name);
        }}
      />
      {/* <FloatingAction
  ref={(ref) => { this.floatingAction = ref; }}
  actions={[...]}
  ...
/> */}
    </View>
  );
}
const actions = [
  {
    text: "EditProfile",
    icon: require("../assets/maploc.png"),
    name: "EditProfile",
    position: 2,
  },
  {
    text: "Language",
    icon: require("../assets/maploc.png"),
    style: { backgroundColor: COLORS.orange },
    name: "bt_language",
    position: 1,
  },
  {
    text: "Location",
    icon: require("../assets/maploc.png"),

    name: "bt_room",
    position: 3,
  },
  {
    text: "Profile",
    icon: require("../assets/maploc.png"),

    name: "Phprofile",
    position: 4,
  },
];

{
  /* <View > */
}
{
  /* <Text >Floating Action example</Text>
  <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
  {/* <FloatingAction
  ref={(ref) => { this.floatingAction = ref; }}
  actions={[...]}
  ...
/> */
}
{
  /* </View> */
}

// this.floatingAction.animateButton();
const styles = StyleSheet.create({
  logo: {
    borderBottomLeftRadius: 50,
  },

  float:{
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // flex: 1,
    // position: "absolute",
    // bottom: 10,
    // right: 10,
  },
});
