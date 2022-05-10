import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Navigator from './routes/homeStack';
import "react-native-gesture-handler";


export default function App() {
  return <Navigator />;
}
