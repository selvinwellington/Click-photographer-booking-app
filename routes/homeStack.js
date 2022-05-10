import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import LoginScreen from '../app/screens/LoginScreen';
import RegistrationScreen from '../app/screens/RegistrationScreen';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen
    },
    LoginScreen: {
        screen: LoginScreen
    },
    
    RegistrationScreen: {
        screen: RegistrationScreen
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);