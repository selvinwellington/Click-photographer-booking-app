import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import CheckBox from "expo-checkbox";
const initialState = {
  Wedding: false,
  Birthday: false,
  Candid: false,
  Traditional: false,
  CinematicVideo: false,
  TraditionalVideo: false,
  PhotoAlbum: false,
};
export default function Checkbox() {
  const [state, setState] = React.useState(initialState);
  const [toggleButton, setToggleButton] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tap on services you require</Text>
      <View>
        <View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.Wedding}
              onValueChange={(value) =>
                setState({
                  ...state,
                  Wedding: value,
                })
              }
            />
            <Text style={styles.text}>Wedding Photography </Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.Birthday}
              onValueChange={(value) =>
                setState({
                  ...state,
                  Birthday: value,
                })
              }
            />
            <Text style={styles.text}>Birthday Photography</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.Candid}
              onValueChange={(value) =>
                setState({
                  ...state,
                  Candid: value,
                })
              }
            />
            <Text style={styles.text}>Candid Photography</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.Traditional}
              onValueChange={(value) =>
                setState({
                  ...state,
                  Traditional: value,
                })
              }
            />
            <Text style={styles.text}>Traditional Photography</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.CinematicVideo}
              onValueChange={(value) =>
                setState({
                  ...state,
                  CinematicVideo: value,
                })
              }
            />
            <Text style={styles.text}>Cinematic Video</Text>
          </View>

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.TraditionalVideo}
              onValueChange={(value) =>
                setState({
                  ...state,
                  TraditionalVideo: value,
                })
              }
            />
            <Text style={styles.text}>Traditional Video</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.PhotoAlbum}
              onValueChange={(value) =>
                setState({
                  ...state,
                  PhotoAlbum: value,
                })
              }
            />
            <Text style={styles.text}>Photo Album</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => setToggleButton((toggleButton) => !toggleButton)}
            title="Continue"
          />
        </View>
      </View>
      {toggleButton && (
        <View style={styles.resultContainer}>
          {Object.entries(state).map(([key, value]) => {
            return (
              value && (
                <View key={key} style={{ paddingHorizontal: 5 }}>
                  <Text>{key}</Text>
                </View>
              )
            );
          })}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: "row",
    padding: 10,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
    backgroundColor: "#fdf5e6",
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    margin: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "orange",
    margin: 30,
  },
  text: {
    color: "black",
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
  },
});
