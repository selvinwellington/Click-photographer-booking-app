// import * as React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import NotificationsScreen from "./NotificationsScreen";
// import MapScreen from "./MapScreen";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Profile from "./Profile";
// import { StyleSheet, Text, View } from "react-native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import MyTabs from "./Explore";

// const Tab = createMaterialBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Dashboard</Text>
//     </View>
//   );
// }

// // function NotificationsScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// //       <Text>Notifications Page</Text>
// //     </View>
// //   );
// // }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>About Page</Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();

// export default function MainScreen() {
//   return (
//     <>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//           <Drawer.Screen name="About" component={AboutScreen} />
//           <Drawer.Screen name="Search" component={MapScreen} />
//           <Drawer.Screen name="Profile" component={Profile}/>
//         </Drawer.Navigator>
        
//       </NavigationContainer>
//       <MyTabs />
//     </>
//   );
// }

import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// import Icon from "react-native-vector-icons/Ionicons";

// import * as React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import NotificationsScreen from "./NotificationsScreen";
import MapScreen from "./MapScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import SettingsScreen from "./SettingsScreen";
import SupportScreen from "./SupportScreen";
import Explore from "./Explore";
import SignOut from "./SignOut";
import DetailsScreen from "./DetailsScreen";
import EditProfileScreen from "./EditProfileScreen";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import ExploreStack from "../../routes/ExploreStack";
import sample from "./sample";

const Tab = createMaterialBottomTabNavigator();


// import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Detail from "./Detail";
import BookingStack from "../../routes/BookingStack";
import PhotoStack from "../../routes/PhotoStack";
// import { NavigationContainer } from "@react-navigation/native";
// import NotificationsScreen from "./NotificationsScreen";
// import MapScreen from "./MapScreen";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Profile from "./Profile";
// import { StyleSheet, Text, View } from "react-native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import MyTabs from "./Explore";

// const Tab = createMaterialBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Dashboard</Text>
//     </View>
//   );
// }


// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>About Page</Text>
//     </View>
//   );
// }



const Drawer = createDrawerNavigator();

  export default function MainScreen() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="sample"
            // component={HomeScreen}
            component={MainTabScreen}
            options={{
              drawerLabel: "Home",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Category" component={PhotoStack} />
          <Drawer.Screen name="Explorer" component={ExploreStack} />

          <Drawer.Screen name="Detail" component={Detail} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="SignOut" component={SignOut} />
          <Drawer.Screen name="BookingPage" component={BookingStack} />

          <Drawer.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* <MyTabs /> */}
    </>
  );
}




 function MainTabScreen(){
  return (
    <Tab.Navigator initialRouteName="sample" activeColor="#fff">
      <Tab.Screen
        name="sample"
        component={sample}
        options={{
          tabBarLabel: "sample",
          tabBarColor: "black",
          // "#009387"
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarLabel: "Search",
          tabBarColor: "#694fad",
          // "#694fad"
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="crosshairs" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="text-search"
              color={color}
              size={26}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />

      {/* <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    /> */}
    </Tab.Navigator>
  );
 }


// ......................................



const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);