import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import COLORS from "../conts/colors";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Phdetails({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/studio2.webp")}
        ></Image>
        <Text style={{ fontWeight: "bold", color: COLORS.grey, padding: 15 }}>
          My Works
        </Text>
        {/* <Text>Floating Action example</Text>  */}
        <View
          style={{
            // backgroundColor: "black",
            position: "relative",
            top: 140,
            right: 5,
            // marginTop:30
          }}
        >
          <FloatingAction
            // style={{ position: "absolute", bottom: 10, right: 10 }}
            actions={actions}
            onPressItem={(name) => {
              console.log(`selected button: ${name}`);
              navigation.navigate(name);
            }}
          />
        </View>
        {/* <FloatingAction
  ref={(ref) => { this.floatingAction = ref; }}
  actions={[...]}
  ...
/> */}
        <View>
          <View style={{ marginLeft: 20 }}>
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Chennai, India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            ricozack@email.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
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

  // float:{
  //   // flex: 1,
  //   position: "absolute",
  //   bottom: 10,
  //   right: 10,
  // },

  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
});
