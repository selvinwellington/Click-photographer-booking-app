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
import Explore from "../app/screens/Explore";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Phlogin from "../app/screens/Phlogin";
import Phdetails from "../app/screens/Phdetails";
import Phprofile from "../app/screens/Phprofile";
import ExploreStack from "./ExploreStack";
import BookingStack from "./BookingStack";
import PhotoStack from "./PhotoStack";
import BookingForm from "../app/screens/BookingForm";

// import sample from "../app/screens/sample";



const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      // title: "Main ",
      //   headerStyle: { backgroundColor: "#00ffff" },
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      // title: "Main ",
      //   headerStyle: { backgroundColor: "#00ffff" },
      headerShown: false,
    },
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: "Main ",
      //   headerStyle: { backgroundColor: "#00ffff" },
      headerShown: false,
    },
  },
  Phlogin: {
    screen: Phlogin,
    navigationOptions: {
      // title: "Main ",
      //   headerStyle: { backgroundColor: "#00ffff" },
      headerShown: false,
    },
  },

  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: {
      // title: "Main ",
      //   headerStyle: { backgroundColor: "#00ffff" },
      headerShown: false,
    },
  },

  MapScreen: {
    screen: MapScreen,
  },

  NotificationsScreen: {
    screen: NotificationsScreen,
  },

  // Explore: {
  //   screen: Explore,
  // },

  // sample: {
  //   screen: sample,
  // },

  Explorer: {
    screen: ExploreStack,
  },

  Category: {
    screen:PhotoStack,
  },
  // HomeScreen: {
  //   screen: HomeScreen,
  // },

  // Detail: {
  //   screen: Detail,
  // },

  // ProfileScreen: {
  //   screen: ProfileScreen,
  //   // navigationOptions: {
  //   //   headerRight: () => (
  //   //     <View style={{ marginRight: 10 }}>
  //   //       <MaterialCommunityIcons.Button
  //   //         name="account-circle"
  //   //         size={25}
  //   //         backgroundColor={colors.background}
  //   //         color={colors.text}
  //   //         onPress={() => navigation.navigate("EditProfileScreen")}
  //   //       />
  //   //     </View>
  //   //   ),
  //   // },
  // },

  // EditProfile: {
  //   screen: EditProfileScreen,
  // },

  Phdetails: {
    screen: Phdetails,
  },

  Phprofile: {
    screen: Phprofile,
  },

  BookingPage:{
    screen: BookingStack,
  },
  BookingForm:{
    screen:BookingForm,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
