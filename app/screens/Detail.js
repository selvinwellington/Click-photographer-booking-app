import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { Button, Gap,  ListItem } from "../../components";
// import Header from "../src/components/molecules/Header";
import ListItem from "../src/components/molecules/ListItem";
import Button from "../src/components/atoms/Button";
import Gap from "../src/components/atoms/Gap";
import colors from "../src/res/colors";
import fonts from "../src/res/fonts";
import {
  IL_BedRoom,
  IL_Garage,
  IL_User_02,
  IL_Pool,
  IL_User_01,
  studio1,
  studio2,
  studio3,
  studio4,
  studio5,
} from "../src/res/images1";

const Detail = ({ navigation, route }) => {
  const { img, name } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView>
        {/* header */}
        {/* <Header
          type="transparent-with-back"
          onPress={() => navigation.goBack()}
        /> */}
        {/* image */}
        <Image
          source={img}
          style={{
            height: 300,
            width: "100%",
            resizeMode: "stretch",
            zIndex: -1,
          }}
        />
        {/* content */}
        <View
          style={{
            top: -50,
            width: "100%",
            backgroundColor: colors.white,
            zIndex: 99,
            bottom: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          {/* section name */}
          <View
            style={{
              flexDirection: "row",
              padding: 30,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 24,
                  // fontFamily: fonts.SemiBold
                  // fontWeight: "bold",
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.Regular,
                  color: colors.grey,
                  marginTop: 10,
                }}
              >
                For 1 day of photo + video
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <IC_Star />
              <IC_Star />
              <IC_Star />
              <IC_Star />
              <IC_Star_Half /> */}
            </View>
          </View>
          {/* section agent */}
          <View style={{ paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
                //  fontFamily: fonts.SemiBold
              }}
            >
              Top Photographers
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={IL_User_01}
                style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
              />
              <View style={{ flex: 1, paddingLeft: 15 }}>
                <Text style={{ fontSize: 14, fontFamily: fonts.Medium }}>
                  Andrew
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: fonts.Regular,
                    color: colors.grey,
                  }}
                >
                  Sony Digital
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                {/* <TouchableOpacity>
                  {IC_Chat}
                  <Text>Contact us</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity>
                  {IC_Call}
                  <Text>Contact us</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Image
              source={IL_User_02}
              style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
            />
            <View style={{ flex: 1, paddingLeft: 15 }}>
              <Text style={{ fontSize: 14, fontFamily: fonts.Medium }}>
                Manoj AK
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: fonts.Regular,
                  color: colors.grey,
                }}
              >
                Focuz Studios
              </Text>
            </View>
          </View>

          {/* house facilities */}
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                // fontFamily: fonts.SemiBold,
                fontSize: 14,
                paddingLeft: 20,
                fontWeight: "bold",
              }}
            >
              Top Studios
            </Text>
            {/* house facilities item */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingVertical: 10, paddingLeft: 20 }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
                <ListItem
                  type="facilities-item"
                  image={studio5}
                  name="Sony Digital"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ListItem
                  type="facilities-item"
                  image={studio4}
                  name="Light Studio"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ListItem
                  type="facilities-item"
                  image={studio2}
                  name="FlyHigh Media"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ListItem
                  type="facilities-item"
                  image={studio3}
                  name="Photon Talkies"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ListItem
                  type="facilities-item"
                  image={studio1}
                  name="Studio F3"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* description */}
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: 14,
                // fontFamily: fonts.SemiBold
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: fonts.Regular,
                color: colors.grey,
                fontSize: 12,
                textAlign: "justify",
              }}
            >
              Photographers record events and tells stories using images. They
              take pictures of people, places, events, and objects.
              Photographers often specialize in a type of photography. Portrait
              photographers take pictures of people in studios or on-site at
              various locations. Commercial photographers take pictures that are
              used in books, advertisements, and catalogs. Photojournalists,
              also known as news photographers, capture images that are usually
              used to illustrate stories on television news broadcasts or in
              newspapers or magazines. Aerial photographers take pictures of
              landscapes and structures from aircraft, while fine arts
              photographers sell their photographs to the public as pieces of
              art. About 147,300 people worked in this occupation in 2016. More
              than half of all photographers are self-employed as freelancers.
              Others work for companies that provide photographic services,
              broadcast companies, and publishers.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 20,
            }}
          >
            {/* <View>
              <Text
                style={{
                  fontSize: 12,
                  // fontFamily: fonts.SemiBold,
                  color: colors.grey,
                }}
              >
                Price
              </Text>
              <Text
                style={{
                  fontFamily: fonts.Bold,
                  fontSize: 20,
                  color: "#4d79ff",
                }}
              >
                $7,500
              </Text>
            </View> */}
            {/* button */}

            {/* <Button
              style={{ flex: 1, justifyContent: "spacearound" }}
              text="Book Now"
              onPress={() =>{ navigation.navigate("Booking")}}
            /> */}

            {/* <TouchableOpacity
              style={style.btn}
              onPress={() => {
                navigation.navigate("Booking");
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Book Now
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
      {/* book */}

      <View
        style={{
          height: 100,
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 12,
                // fontFamily: fonts.SemiBold,
                color: colors.grey,
              }}
            >
              {/* Price */}
            </Text>
            <Text
              style={{
                fontFamily: fonts.Bold,
                fontSize: 20,
                color: "#4d79ff",
              }}
            >
              {/* $7,500 */}
            </Text>
          </View>
          {/* button */}
          {/* <Button text="Book Now" /> */}
        </View>
      </View>
    </View>
  );
};

export default Detail;

const style = StyleSheet.create({

});
