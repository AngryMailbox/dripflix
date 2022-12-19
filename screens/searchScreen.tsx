import React from "react";
import { View } from "react-native";
import Search from "../components/Search";
import { StyleSheet } from "react-native";

export default function searchScreen({ navigation }) {
  return (
    <>
      <View style={styles.wrapper}>
        <Search />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
});
