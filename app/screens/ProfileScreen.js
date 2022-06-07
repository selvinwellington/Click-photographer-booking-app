import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableOpacity,
  TouchableRipple,
  useTheme,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const ProfileStack = createStackNavigator();
import EditProfileScreen from "./EditProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

// import Share from "react-native-share";

// import files from "../assets/filesBase64";

const ProfileScreen = ({ navigation }) => {
  // const myCustomShare = async () => {
  //   const shareOptions = {
  //     message:
  //       "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
  //     url: files.appLogo,
  //     // urls: [files.image1, files.image2]
  //   };

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch (error) {
  //     console.log("Error => ", error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Rico Zack
            </Title>
            <Caption style={styles.caption}>@ricozack</Caption>
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
      {/* 
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>₹140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View> */}
      <TouchableRipple
        style={styles.commandButton}
        onPress={() => navigation.navigate("   ")}
      >
        <Text style={styles.panelButtonTitle}>Edit Profile</Text>
      </TouchableRipple>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friend</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="brightness-7" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

// const ProfileStackScreen = ({ navigation }) => {
//   const { colors } = useTheme();

//   return (
//     //  <ProfileStack.Navigator
//     //    screenOptions={{
//     //      headerStyle: {
//     //        backgroundColor: colors.background,
//     //        shadowColor: colors.background, // iOS
//     //        elevation: 0, // Android
//     //      },
//     //      headerTintColor: colors.text,
//     //    }}
//     //  >
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         // options={{
//         //   title: '',
//         //   headerLeft: () => (
//         //     <View style={{marginLeft: 10}}>
//         //       <Icon.Button
//         //         name="ios-menu"
//         //         size={25}
//         //         backgroundColor={colors.background}
//         //         color={colors.text}
//         //         onPress={() => navigation.openDrawer()}
//         //       />
//         //     </View>
//         //   ),
//         //   headerRight: () => (
//         //     <View style={{marginRight: 10}}>
//         //       <MaterialCommunityIcons.Button
//         //         name="account-edit"
//         //         size={25}
//         //         backgroundColor={colors.background}
//         //         color={colors.text}
//         //         onPress={() => navigation.navigate('EditProfile')}
//         //       />
//         //     </View>
//         //   ),
//         // }}
//       />
//       <ProfileStack.Screen
//         name="EditProfile"
//         options={{
//           title: "Edit Profile",
//         }}
//         component={EditProfileScreen}
//       />
//     </ProfileStack.Navigator>
//   );
// };

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  commandButton: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#FF6347",
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
});
