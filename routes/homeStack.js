import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import LoginScreen from "../app/screens/LoginScreen";
import RegistrationScreen from "../app/screens/RegistrationScreen";
import MapScreen from "../app/screens/MapScreen";
import MainScreen from "../app/screens/MainScreen";
import NotificationsScreen from "../app/screens/NotificationsScreen";
import HomeScreen from "../app/screens/HomeScreen";
import Detail from "../app/screens/Detail";
import DetailsScreen from "../app/screens/DetailsScreen";
import ProfileScreen from "../app/screens/ProfileScreen";
import EditProfileScreen from "../app/screens/EditProfileScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

  DetailsScreen: {
    screen: DetailsScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
  },

  Detail: {
    screen: Detail,
  },

  ProfileScreen: {
    screen: ProfileScreen,
    // navigationOptions: {
    //   headerRight: () => (
    //     <View style={{ marginRight: 10 }}>
    //       <MaterialCommunityIcons.Button
    //         name="account-circle"
    //         size={25}
    //         backgroundColor={colors.background}
    //         color={colors.text}
    //         onPress={() => navigation.navigate("EditProfileScreen")}
    //       />
    //     </View>
    //   ),
    // },
  },

  EditProfile: {
    screen: EditProfileScreen,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
