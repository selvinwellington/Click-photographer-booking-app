import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Explore() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ExploreScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});









// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import MainScreen from "./MainScreen";
// import Profile from "./Profile";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import MapScreen from "./MapScreen";
// import NotificationsScreen from "./NotificationsScreen";

// const Tab = createMaterialBottomTabNavigator();

// export default function MyTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Profile"
//         activeColor="#e91e63"
//         labelStyle={{ fontSize: 12 }}
//         style={{ backgroundColor: "tomato" }}
//       >
//         <Tab.Screen
//           name="Maps"
//           component={MapScreen}
//           options={{
//             tabBarLabel: "Maps",
//             // tabBarIcon: ({ color }) => (
//             // <MaterialCommunityIcons name="home" color={color} size={26} />
//             // ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profile}
//           options={{
//             tabBarLabel: "Profile",
//             // tabBarIcon: ({ color }) => (
//             // <MaterialCommunityIcons name="bell" color={color} size={26} />
//             // ),
//           }}
//         />
//         <Tab.Screen
//           name="Notifications"
//           component={NotificationsScreen}
//           options={{
//             tabBarLabel: "Notifications",
//             // tabBarIcon: ({ color }) => (
//             // <MaterialCommunityIcons name="account" color={color} size={26} />
//             // ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
