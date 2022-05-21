import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import LoginScreen from "../app/screens/LoginScreen";
import RegistrationScreen from "../app/screens/RegistrationScreen";
import MapScreen from "../app/screens/MapScreen";
import MainScreen from "../app/screens/MainScreen";
import NotificationsScreen from "../app/screens/NotificationsScreen";

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
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
