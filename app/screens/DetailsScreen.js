import React from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import COLORS from "../conts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import ListItem from "../src/components/molecules/ListItem";
import {
  wedding,
  birthday,
  products,
  foreign,
  products2,
  birthday2,
  birthday3,
  candid,
  candid2,
} from "../studiopics/studioimg";

const DetailsScreen = ({ navigation, route }) => {
  // const item = {
  //   id: "2",
  //   name: "FlyHigh Media",
  //   location: "Guindy,Chennai",
  //   price: 900,
  //   image: require("../assets/studio2.webp"),
  //   details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
  // };

  const item = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="bookmark-border" size={28} color={COLORS.white} />
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon name="place" color={COLORS.white} size={28} />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: COLORS.grey,
              marginTop: 5,
            }}
          >
            {item.location}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.grey} />
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}>
                4.0
              </Text>
            </View>
            <Text style={{ fontSize: 13, color: COLORS.grey }}>365reviews</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Price</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: COLORS.grey,
                marginLeft: 5,
              }}
            >
              ₹{item.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: COLORS.grey,
                marginLeft: 5,
              }}
            >
              - For 1 day of photo + video
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              // fontFamily: fonts.SemiBold,
              fontSize: 14,
              paddingLeft: 20,
              fontWeight: "bold",
            }}
          >
            Photo Albums
          </Text>
          {/* house facilities item */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 10, paddingLeft: 20 }}
          >
            <ListItem type="facilities-item" image={birthday} name="Birthday" />
            <ListItem type="facilities-item" image={wedding} name="wedding" />

            <ListItem type="facilities-item" image={candid} name="Candid" />

            {/* <ListItem
              type="facilities-item"
              image={birthday3}
              name="Birthday"
            /> */}
            {/* <ListItem type="facilities-item" image={birthday} name="Birthday" />
            <ListItem type="facilities-item" image={birthday} name="Birthday" /> */}

            <ListItem type="facilities-item" image={products} name="Product" />
            <ListItem type="facilities-item" image={foreign} name="wedding" />
            <ListItem type="facilities-item" image={products2} name="Product" />
            <ListItem type="facilities-item" image={candid2} name="Candid" />
          </ScrollView>
        </View>

        <TouchableOpacity style={style.btn}>
          <Text
            style={{ color: COLORS.white, fontSize: 18, fontWeight: "bold" }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: "center",
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
  },
  iconContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
});

export default DetailsScreen;
