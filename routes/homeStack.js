import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import LoginScreen from "../app/screens/LoginScreen";
import RegistrationScreen from "../app/screens/RegistrationScreen";
import MapScreen from "../app/screens/MapScreen";
import MainScreen from "../app/screens/MainScreen";
import NotificationsScreen from "../app/screens/NotificationsScreen";
import Explore from "../app/screens/Explore";
import DetailsScreen from "../app/screens/DetailsScreen";
import sample from "../app/screens/sample";

const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },

  RegistrationScreen: {
    screen: RegistrationScreen,
  },

  MapScreen: {
    screen: MapScreen,
  },

  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: "Main ",
    //   headerStyle: { backgroundColor: "#00ffff" },
      headerShown: false,
    },
  },

  NotificationsScreen: {
    screen: NotificationsScreen,
  },

  // Explore: {
  //   screen: Explore,
  // },

  // DetailsScreen:{
  //   screen: DetailsScreen,
  // },

 
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
