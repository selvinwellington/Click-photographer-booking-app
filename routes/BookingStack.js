import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import COLORS from "../app/conts/colors";

import BookingPage1 from "../app/screens/BookingPage1";
import BookingPage2 from "../app/screens/BookingPage2";
import BookingPage3 from "../app/screens/BookingPage3";
import BookingPage4 from "../app/screens/BookingPage4";
import BookingPage5 from "../app/screens/BookingPage5";

const Stack = createStackNavigator();
export default function BookingStack() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BookingPage1" component={BookingPage1} />
        <Stack.Screen name="BookingPage2" component={BookingPage2} />
        <Stack.Screen name="BookingPage3" component={BookingPage3} />
        <Stack.Screen name="BookingPage4" component={BookingPage4} />
        <Stack.Screen name="BookingPage5" component={BookingPage5} />

        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </>
  );
}
