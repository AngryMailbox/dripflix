import React, { useState, useEffect } from "react";
import { Route, ScrollView, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
} from "react-native-paper";
//import movies from "../data/moviedata.js";
import { StyleSheet } from "react-native";

import { getContent } from "../app/core"

const props = {
  navigation: {
    navigate: (pageName: string) => {
      console.log(pageName);
    },
  },
};

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    let data = await getContent("trending");
    setMovies(data);
  }

  console.log(movies);

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
            <Card.Content style={styles.contentWrapper}>
              <Card.Cover source={{ uri: movie.img }} />
              <Title style={styles.title}>{movie.title}</Title>
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
    backgroundColor: "#202020",
  },
  items: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
    height: 30,
  },
  item: {
    width: "33%",
    backgroundColor: "none",
  },

  contentWrapper: {
    height: "50%",
    paddingBottom: 0,
  },

  title: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
