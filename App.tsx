import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/appbar";
import BottomNav from "./components/bottomNav";
import Movies from "./components/movies";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import Wrapper from "./components/mainWrapper";


import { NativeRouter, Route, Routes } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" component={Movies} />
        </Routes>
        <BottomNav />
      </>
    </NativeRouter>
  );
}
