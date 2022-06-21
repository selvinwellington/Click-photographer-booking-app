import { StyleSheet, Text, View, Image, SafeAreaView,ScrollView} from "react-native";
import React from "react";
import COLORS from "../conts/colors";
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  wedding,
  birthday,
  products,
  foreign,
  products2,
  birthday2,
  birthday3,
  candid,
  candid2,
} from "../studiopics/studioimg";
import ListItem from "../src/components/molecules/ListItem";


export default function Phdetails({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/studio4.jpg")}
          ></Image>

          {/* <Text>Floating Action example</Text>  */}
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                marginTop: 10,
                padding: 15,
              }}
            >
              About
            </Text>
            <Text
              style={{
                fontWeight: "500",
                color: "black",
                padding: 15,
                textAlign: "justify",
              }}
            >
              We are Photon Talkies from Chennai. With great experience in the
              wedding industry, we have a team with vast experience and relevant
              expertise in "Photography" industry. We will make sure that you
              cherish these special moments all your life. If you want to
              capture those special moments with your guests, we are your best
              choice. For queries, information and special offers, contact us
              via CLICK. Your story, Our way!
            </Text>
            <Text style={{ fontWeight: "bold", color: "black", padding: 5 }}>
              My Works
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingVertical: 10, paddingLeft: 20 }}
            >
              <ListItem
                type="facilities-item"
                image={birthday}
                name="Birthday"
              />
              <ListItem type="facilities-item" image={wedding} name="wedding" />

              <ListItem type="facilities-item" image={candid} name="Candid" />

              {/* <ListItem
              type="facilities-item"
              image={birthday3}
              name="Birthday"
            /> */}
              {/* <ListItem type="facilities-item" image={birthday} name="Birthday" />
            <ListItem type="facilities-item" image={birthday} name="Birthday" /> */}

              <ListItem
                type="facilities-item"
                image={products}
                name="Product"
              />
              <ListItem type="facilities-item" image={foreign} name="wedding" />
              <ListItem
                type="facilities-item"
                image={products2}
                name="Product"
              />
              <ListItem type="facilities-item" image={candid2} name="Candid" />
            </ScrollView>
          </View>

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
              color="black"
              animated={true}
              iconWidth={20}
              iconHeight={20}
              buttonSize={50}
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
          {/* <View>
          <View style={{ marginLeft: 20 }}>
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
        </View> */}
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
      </ScrollView>
    </SafeAreaView>
  );
}
const actions = [
  {
    text: "EditProfile",
    icon: require("../assets/maploc.png"),
    name: "EditProfileScreen",
    position: 2,
    animated: true,
  },
  {
    text: "Album",
    icon: require("../assets/maploc.png"),
    // style: { backgroundColor: COLORS.orange },
    name: "bt_language",
    animated: true,
    position: 1,
  },
  {
    text: "Request",
    icon: require("../assets/maploc.png"),

    name: "bt_room",
    animated: true,
    position: 3,
  },
  {
    text: "Profile",
    icon: require("../assets/phprofile.png"),

    name: "Phprofile",
    animated: true,
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
  container: {
    backgroundColor: "#c0c0c0",
  },

  logo: {
    borderBottomLeftRadius: 50,
    height: 380,
  },

  // userInfoSection: {
  //   marginTop: 20,
  // },

  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    
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
