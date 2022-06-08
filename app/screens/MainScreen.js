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
import RegistrationScreen from "./RegistrationScreen";
import payment from "../components/payment";

const Tab = createMaterialBottomTabNavigator();


// import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Detail from "./Detail";
import BookingStack from "../../routes/BookingStack";
import PhotoStack from "../../routes/PhotoStack";
import BookingForm from "./BookingForm";

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
            name="Home"
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
          <Drawer.Screen
            name="About"
            component={AboutScreen}
            options={{
              drawerLabel: "About",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="gesture-tap-hold"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          {/* <Drawer.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              drawerLabel: "Notifications",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="notification-clear-all"
                  color={color}
                  size={26}
                />
              ),
            }}
          /> */}
          <Drawer.Screen
            name="Explorer"
            component={ExploreStack}
            options={{
              drawerLabel: "Explore",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="toy-brick-search"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Category"
            component={PhotoStack}
            options={{
              drawerLabel: "Category",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="calendar-multiple"
                  color={color}
                  size={26}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Filter"
            component={BookingStack}
            options={{
              drawerLabel: "Filter",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="filter-plus"
                  color={color}
                  size={26}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Support"
            component={SupportScreen}
            options={{
              drawerLabel: "Support",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-alert"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              drawerLabel: "Settings",
              drawerColor: "#009387",
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="brightness-7"
                  color={color}
                  size={26}
                />
              ),
            }}
          />

          <Drawer.Screen name="    " component={ProfileScreen} />
          <Drawer.Screen name="      " component={SignOut} />

          <Drawer.Screen name="   " component={EditProfileScreen} />
          <Drawer.Screen name=" " component={Detail} />

          <Drawer.Screen name="         " component={RegistrationScreen} />

          <Drawer.Screen name="Booking" component={BookingForm} />

          <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
          <Drawer.Screen name="payment" component={payment} />
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
          tabBarLabel: "Home",
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