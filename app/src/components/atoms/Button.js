import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../src/res/colors";
// import fonts from "../../src/res/fonts";


const Button = ({ text,navigation }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#4d79ff",
        paddingHorizontal: 58,
        paddingVertical: 15,
        borderRadius: 30,
      }}
     
    >
      <Text
        style={{
          // fontFamily: fonts.SemiBold,
          fontSize: 16,
          color: colors.white,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
