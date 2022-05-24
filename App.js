import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MapScreen from "./app/screens/MapScreen";
import Navigator from "./routes/homeStack";
import MainScreen from "./app/screens/MainScreen";
// import AppStack from "./routes/AppStack";
// import Profile from './app/screens/Profile';
import Explore from './app/screens/Explore';
import "react-native-gesture-handler";
import MyTabs from "./app/screens/Explore";
import DetailsScreen from "./app/screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


export default function App() {
  return <Navigator />;
}
