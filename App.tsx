import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/navbar";
import BottomNav from "./components/bottomNav";
import Movies from "./components/movies";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NativeRouter, Route, Routes } from "react-router-native";
import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./components/Search";
import MainContainer from "./navigation/MainContainer";

export default function App() {
  return (
    <>
      <MainContainer />
    </>
  );
}
