// import { StyleSheet, Text, View, Button } from "react-native";
// import React from "react";

// export default function MainScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button
//         onPress={() => navigation.navigate("NotificationsScreen")}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import NotificationsScreen from "./NotificationsScreen";
import MapScreen from "./MapScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./Profile";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard</Text>
    </View>
  );
}

// function NotificationsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Notifications Page</Text>
//     </View>
//   );
// }

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Page</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Search" component={MapScreen} />
      </Drawer.Navigator>
      {/* <Tab.Navigator
        initialRouteName="Profile"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="Maps"
          component={MapScreen}
          options={{
            tabBarLabel: "Maps",
            // tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="home" color={color} size={26} />
            // ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            // tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={26} />
            // ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarLabel: "Notifications",
            // tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="account" color={color} size={26} />
            // ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>About Page</Text>
    // </View>
  );
}
