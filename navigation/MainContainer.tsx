import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

//Screens
import Movies from "../components/movies";
import Search from "../components/Search";
import Test from "../components/test";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navbar from "../components/navbar";
//import MovieCard from "./movieCard[id]";

const moviesName = "movies";
const searchName = "search";
const testName = "test";
const navbarName = "navbar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={moviesName}
        screenOptions={({ route }) => ({
          headerShown: true,
          header: Navbar,
          title: route.name,
        })}
      >
        <Stack.Screen name={navbarName} component={Navbar} />
        <Stack.Screen name={testName} component={Test} />
        <Stack.Screen name={moviesName} component={Movies} />
        <Stack.Screen name={searchName} component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
