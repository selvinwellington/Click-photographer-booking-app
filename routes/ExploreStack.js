import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../app/screens/Explore";
import COLORS from "../app/conts/colors";
import DetailsScreen from "../app/screens/DetailsScreen";
const Stack = createStackNavigator();
export default function ExploreStack() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </>
  );
}
