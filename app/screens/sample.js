import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button, Block, Text, Input, theme } from "galio-framework";

// import Icon from "../homedemo/components/Icon";
import Product from "../homedemo/components/Product";

const { width } = Dimensions.get("screen");
import products from "../homedemo/constants/products";

export default class sample extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;

    return (
      <Input
        right
        color="black"
        style={styles.search}
        // iconContent={iconCamera}
        placeholder="What are you looking for?"
        // onFocus={() => navigation.navigate("Pro")}
      />

         
       
    );
  };

  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          // onPress={() => navigation.navigate("Pro")}
        >
          <Block row middle>
            {/* <Icon name="grid" family="feather" style={{ paddingRight: 8 }} /> */}
            <Text size={16} style={styles.tabTitle}>
              Categories
            </Text>
          </Block>
        </Button>
        <Button
          shadowless
          style={styles.tab}
          // onPress={() => navigation.navigate("Pro")}
        >
          <Block row middle>
            {/* <Icon
              size={16}
              name="camera-18"
              family="GalioExtra"
              style={{ paddingRight: 8 }}
            /> */}
            <Text size={16} style={styles.tabTitle}>
              Best Deals
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 20, paddingLeft: 10 }}
          />
        </View>

        <Block row style={styles.tabs}>
          <Button
            shadowless
            style={[styles.tab, styles.divider]}
            // onPress={() => navigation.navigate("ExploreStack")}
          >
            <Block row middle>
              {/* <Icon name="grid" family="feather" style={{ paddingRight: 8 }} /> */}
              <Text size={16} style={styles.tabTitle}>
                Explore
              </Text>
            </Block>
          </Button>
          <Button
            shadowless
            style={styles.tab}
            // onPress={() => navigation.navigate("PhotoStack")}
          >
            <Block row middle>
              {/* <Icon
              size={16}
              name="camera-18"
              family="GalioExtra"
              style={{ paddingRight: 8 }}
            /> */}
              <Text size={16} style={styles.tabTitle}>
                Categories
              </Text>
            </Block>
          </Button>
        </Block>

        <Block flex>
          <Product product={products[0]} horizontal />
          <Block flex row>
            <Product
              product={products[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Product product={products[2]} />
          </Block>
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: "#e6e6fa",
    width: width * 0.5,
    borderRadius: 0,
    // borderWidth: 1,
    height: 40,
    elevation: 0,
    // borderColor: "black",
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "500",
    // color: "white",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: "gray",
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: "#c0c0c0",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});
