import React from "react";
import Navigator from "./routes/homeStack";
import HomeScreen from "./app/screens/HomeScreen";
import "react-native-gesture-handler";
// import Share from "react-native-share";


export default function App() {
  return <Navigator />;
  // return < HomeScreen />;
}
