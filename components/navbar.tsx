import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Appbar, BottomNavigation } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { search } from "../app/api";
import BottomNav from "./bottomNav";
import { NativeRouter, Route, Link } from "react-router-native";
import App from "../App";
import bottomNavigationRef from "./bottomNav";
import movieScreen from "../screens/movieScreen";

export default function Navbar({ navigation }) {
  return (
    <>
      <Appbar
        mode="center-aligned"
        dark={true}
        style={[
          {
            height: 100,
            backgroundColor: "#202020",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Appbar.Action
          icon="menu"
          color="white"
          size={35}
          style={{ marginTop: 15 }}
          onPress={() => console.log("Pressed menu")}
        />
        <Appbar.Content
          title="DRIPFLIX"
          titleStyle={[
            { color: "white", fontWeight: "bold", fontSize: 30, marginTop: 15 },
          ]}
          onPress={() => navigation.navigate("movies")}
        />
        <Appbar.Action
          icon="magnify"
          color="white"
          size={35}
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate("search")}
        />
      </Appbar>
    </>
  );
}
