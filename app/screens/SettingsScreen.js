// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>SettingsScreen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({})

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import SettingsComponent from "../components/SettingsComponent";

const SettingsScreen = () => {
  const [email, setEmail] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(null);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const settingsOptions = [
    { title: "My Info", subTitle: "Setup your profile", onPress: () => {} },
    { title: "My Booking", subTitle: null, onPress: () => {} },
    {
      title: "Edit Profile",
      subTitle: email,
      onPress: () => {},
    },
    {
      title: "Contacts to display",
      subTitle: "All contacts",
      onPress: () => {},
    },
    {
      title: "Sort by",
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    // { title: "Name format", subTitle: "First name first", onPress: () => {} },
    // { title: "Import", subTitle: null, onPress: () => {} },
    // { title: "Export", subTitle: null, onPress: () => {} },
    // { title: "Blocked numbers", subTitle: null, onPress: () => {} },
    { title: "Contact Us", subTitle: null, onPress: () => {} },
    { title: "Log Out", subTitle: null, onPress: () => {} },
  ];

  const prefArr = [
    {
      name: "First Name",
      selected: sortBy === "First Name",

      onPress: () => {
        saveSetting("sortBy", "First Name");
        setSortBy("First Name");
        setModalVisible(false);
      },
    },
    {
      name: "Last Name",
      selected: sortBy === "Last Name",
      onPress: () => {
        saveSetting("sortBy", "Last Name");
        setSortBy("Last Name");
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem("user");
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem("sortBy");
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      settingsOptions={settingsOptions}
      prefArr={prefArr}
    />
  );
};

export default SettingsScreen;