import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Wrapper = ({ Children }) => {
  return <View> Children={Children}</View>;
};

export default Wrapper;
