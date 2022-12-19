import React, { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { CardCover } from "react-native-paper/lib/typescript/components/Card/CardCover";
import { searchMovie } from "../app/core";
import MarqueeText from "react-native-marquee";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Test({ navigation }) {
  return (
    <>
      <View>
        <Text
          style={{ color: "black", fontSize: 200 }}
          onPress={() => navigation.navigate("movies")}
        >
          Test
        </Text>
      </View>
    </>
  );
}
