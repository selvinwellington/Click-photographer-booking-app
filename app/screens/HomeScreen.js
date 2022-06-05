import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import Header from "../src/components/molecules/Header";
import ListItem from "../src/components/molecules/ListItem";
import colors from "../src/res/colors";
import fonts from "../src/res/fonts";
// import images from "../src/res/images/Illustration";
import {
  // IC_Search,
  IL_House_01,
  IL_House_02,
  IL_House_03,
  IL_House_04,
  IL_House_05,
} from "../src/res/images1";

// export default HomeScreen = () => {
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        {/* <Header /> */}
        {/* welcome text */}
        <View style={styles.wrapperWelcome}>
          <Text style={styles.textWelcome}>Find Best </Text>
          <Text style={styles.textWelcome}>Photographer</Text>
        </View>
        {/* search section */}
        {/* <View style={styles.wrapperSearch}>
          <View style={styles.wrapperTxtInput}>
            <TextInput
              placeholder="Find your dream home"
              style={styles.txtInput}
            />
            {/* btn search */}
        {/* <View style={styles.wrapperBtnSearch}>
              <TouchableOpacity>
                {/* <IC_Search /> */}
        {/* </TouchableOpacity>
            </View>
          </View>
        </View> */}
        {/* content */}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.wrapperContent}
          >
            <ListItem
              type="main"
              name="Wedding Photography"
              city="Full Day"
              image={IL_House_01}
              onPress={() =>
                navigation.navigate("Detail", {
                  img: IL_House_01,
                  name: "Wedding Photography",
                })
              }
            />
            <ListItem
              type="main"
              name="Birthday"
              city="Full Day"
              image={IL_House_02}
              onPress={() =>
                navigation.navigate("Detail", {
                  img: IL_House_02,
                  name: "Birthday Photography",
                })
              }
            />
            <ListItem
              type="main"
              name="Event"
              city="Full Day"
              image={IL_House_03}
              onPress={() =>
                navigation.navigate("Detail", {
                  img: IL_House_03,
                  name: "Event Photography",
                })
              }
            />
            <ListItem
              type="main"
              name="Aerial Photography"
              city=""
              image={IL_House_04}
              onPress={() =>
                navigation.navigate("Detail", {
                  img: IL_House_04,
                  name: "Aerial Photography",
                })
              }
            />
          </ScrollView>
          {/* recommend section */}
          <View style={styles.wrapperRecommend}>
            <Text style={styles.textTitleRecommend}>Recommended For You</Text>

            <ListItem
              name="Travel Photography"
              city="Full Day"
              image={IL_House_03}
            />
            <ListItem name="Fashion" city="" image={IL_House_04} />
            <ListItem name="Festivals" city="" image={IL_House_05} />
            <ListItem name="Portrait Photography" city="" image={IL_House_05} />
            <ListItem name="Sports Photography" city="" image={IL_House_05} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f8f8ff" },
  // "#f8f8ff"
  wrapperWelcome: { paddingHorizontal: 20 },
  textWelcome: {
    fontSize: 25,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  wrapperSearch: {
    paddingHorizontal: 20,
    marginTop: 30,

    shadowColor: "#708090",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  wrapperTxtInput: {
    flexDirection: "row",
    backgroundColor: "#f8f8ff",
    height: 55,
    width: "100%",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  txtInput: { fontSize: 14 },
  fontFamily: fonts.Regular,
  wrapperBtnSearch: {
    backgroundColor: "#4d79ff",
    height: 39,
    width: 39,
    borderRadius: 39 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperContent: {
    marginTop: 30,
    paddingLeft: 20,
    flexDirection: "row",
    paddingVertical: 10,
  },
  wrapperRecommend: { marginTop: 30, paddingHorizontal: 20 },
  textTitleRecommend: { fontSize: 16 },
  fontFamily: fonts.SemiBold,
});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>HomeScreen</Text>

//     </View>
//   )
// }

// const styles = StyleSheet.create({})
