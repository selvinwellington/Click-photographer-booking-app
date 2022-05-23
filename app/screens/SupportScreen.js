import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SupportScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SupportScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({})





// import React from "react";
// import { View, StyleSheet } from "react-native";
// import {
//   useTheme,
//   Avatar,
//   Image,
//   Title,
//   Caption,
//   Paragraph,
//   Drawer,
//   Text,
//   TouchableRipple,
//   Switch,
// } from "react-native-paper";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";




// export function DrawerContent(props) {
//   const paperTheme = useTheme();

//   const { signOut, toggleTheme } = React.useContext(AuthContext);

//   return (
//     <View style={{ flex: 1 }}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <View style={{ flexDirection: "row", marginTop: 15 }}>
             
//                 <Avatar.Image size={24} source={require('../assets/profile-avatar.jpg')} 
                
//               />
          
//               <View style={{ marginLeft: 15, flexDirection: "column" }}>
//                 <Title style={styles.title}>John Doe</Title>
//                 <Caption style={styles.caption}>@j_doe</Caption>
//               </View>
//             </View>

//             <View style={styles.row}>
//               <View style={styles.section}>
//                 <Paragraph style={[styles.paragraph, styles.caption]}>
//                   80
//                 </Paragraph>
//                 <Caption style={styles.caption}>Following</Caption>
//               </View>
//               <View style={styles.section}>
//                 <Paragraph style={[styles.paragraph, styles.caption]}>
//                   100
//                 </Paragraph>
//                 <Caption style={styles.caption}>Followers</Caption>
//               </View>
//             </View>
//           </View>

//           <Drawer.Section style={styles.drawerSection}>
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="home-outline" color={color} size={size} />
//               )}
//               label="Home"
//               onPress={() => {
//                 props.navigation.navigate("HomeScreen");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="account-outline" color={color} size={size} />
//               )}
//               label="Profile"
//               onPress={() => {
//                 props.navigation.navigate("Profile");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="bookmark-outline" color={color} size={size} />
//               )}
//               label="Bookmarks"
//               onPress={() => {
//                 props.navigation.navigate("BookmarkScreen");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="settings-outline" color={color} size={size} />
//               )}
//               label="Settings"
//               onPress={() => {
//                 props.navigation.navigate("SettingsScreen");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="account-check-outline" color={color} size={size} />
//               )}
//               label="Support"
//               onPress={() => {
//                 props.navigation.navigate("SupportScreen");
//               }}
//             />
//           </Drawer.Section>
//           <Drawer.Section title="Preferences">
//             <TouchableRipple
//               onPress={() => {
//                 toggleTheme();
//               }}
//             >
//               <View style={styles.preference}>
//                 <Text>Dark Theme</Text>
//                 <View pointerEvents="none">
//                   <Switch value={paperTheme.dark} />
//                 </View>
//               </View>
//             </TouchableRipple>
//           </Drawer.Section>
//         </View>
//       </DrawerContentScrollView>
//       <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({ color, size }) => (
//             <Icon name="exit-to-app" color={color} size={size} />
//           )}
//           label="Sign Out"
//           onPress={() => {
//             signOut();
//           }}
//         />
//       </Drawer.Section>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: "bold",
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: "bold",
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: "#f4f4f4",
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });



// import * as React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import NotificationsScreen from "./NotificationsScreen";
// import MapScreen from "./MapScreen";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Profile from "./Profile";
// import { StyleSheet, Text, View } from "react-native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import MyTabs from "./Explore";

// const Tab = createMaterialBottomTabNavigator();
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Dashboard</Text>
//     </View>
//   );
// }


// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>About Page</Text>
//     </View>
//   );
// }
// const Drawer = createDrawerNavigator();

// export default function MainScreen() {
//   return (
//     <>
//       <NavigationContainer>
//         <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//           <Drawer.Screen name="About" component={AboutScreen} />
//           <Drawer.Screen name="Search" component={MapScreen} />
//           <Drawer.Screen name="Profile" component={Profile}/>
//         </Drawer.Navigator>
        
//       </NavigationContainer>
//       {/* <MyTabs /> */}
//     </>
//   );
// }