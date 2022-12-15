import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../components/appbar";
import BottomNav from "../components/bottomNav";
import { Provider as PaperProvider } from "react-native-paper";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <PaperProvider>
      <Navbar />
      <BottomNav />
    </PaperProvider>
  );
}
