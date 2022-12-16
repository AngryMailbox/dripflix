import * as React from "react";
import { Route, ScrollView, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
} from "react-native-paper";
import movies from "../data/moviedata.js";
import { StyleSheet } from "react-native";

const props = {
  navigation: {
    navigate: (pageName: string) => {
      console.log(pageName);
    },
  },
};

const Movies = () => {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        {movies.map((movie) => (
          <Card
            onPress={() => {
              console.log("Pressed" + movie.title);
            }}
            style={styles.item}
            mode="contained"
            key={movie.id}
          >
            <Card.Content>
              <Card.Cover source={{ uri: movie.img }} />
              <Title style={styles.title}>{movie.title}</Title>
              {/* <Paragraph>Card content</Paragraph> */}
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
};
export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  items: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
  },
  item: {
    width: "30%",
    backgroundColor: "none",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
