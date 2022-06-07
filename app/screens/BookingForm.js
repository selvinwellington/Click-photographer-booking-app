import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

import COLORS from "../conts/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";

const BookingForm = ({ navigation, route }) => {
  const company = route.params;
  // console.log(company.name);
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
      setVisible(false);
    }

    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      isValid = false;
      setVisible(false);
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      setVisible(false);
      isValid = false;
    } else if (inputs.phone.length < 10) {
      handleError("Enter 10-digit phone number", "phone");
      isValid = false;
    }

    // if (!inputs.password) {
    //   handleError("Please input password", "password");
    //   isValid = false;
    // } else if (inputs.password.length < 5) {
    //   handleError("Min password length of 5", "password");
    //   isValid = false;
    // }

    // if (!inputs.address) {
    //   handleError("Please input address", "address");
    //   isValid = false;
    // }
    // if (!inputs.city) {
    //   handleError("Please input city", "city");
    //   isValid = false;
    // }
    if (isValid) {
      setVisible(true);
      // register();

      setTimeout(() => {
        setVisible(false);
        navigation.navigate("Home");
      }, 3000);
    }
  };

  const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  const Pop = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ModalPoup visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              {/* <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require("../assets/close.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity> */}
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/success.png")}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text
            style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
          >
            Congratulations Your Booking was successful
          </Text>
        </ModalPoup>
      </View>
    );
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("LoginScreen");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={{ color: COLORS.black, fontSize: 30, fontWeight: "bold" }}>
          Book Now - {company.name}
        </Text>
        {/* <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Book Now
        </Text> */}
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "phone")}
            onFocus={() => handleError(null, "phone")}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          {/* <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          /> */}
          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="map-marker-radius"
            label="Address"
            placeholder="Enter your address"
            error={errors.address}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="map-marker-radius"
            label="City"
            placeholder="Enter your city"
            error={errors.city}
          />
          <Button
            title="Confirm Booking"
            onPress={() => {
              // setVisible(true);
              validate();
            }}
          />

          {/* <Button title="Register" onPress={validate} /> */}
          {/* <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Already have account ?Login
          </Text> */}
        </View>
      </ScrollView>
      <Pop />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default BookingForm;
