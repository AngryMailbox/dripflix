import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

const Navbar = () => {
  return (
    <>
      <Appbar
        mode="center-aligned"
        dark={true}
        style={[
          {
            backgroundColor: "#202020",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Appbar.Action
          icon="menu"
          color="white"
          size={30}
          onPress={() => console.log("Pressed hamburger")}
        />
        <Appbar.Content
          title="DRIPFLIX"
          titleStyle={[{ color: "white", fontWeight: "bold", fontSize: 30 }]}
          onPress={() => console.log("Pressed title")}
        />
        <Appbar.Action
          icon="magnify"
          color="white"
          size={30}
          onPress={() => console.log("Pressed search")}
        />
      </Appbar>
    </>
  );
};

export default Navbar;
