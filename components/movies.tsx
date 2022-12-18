import React, { useState, useEffect } from "react";
import {
  Route,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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

import { getContent } from "../app/core";
import MarqueeText from "react-native-marquee";

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
    <TouchableWithoutFeedback>
      <ScrollView
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
        overScrollMode={"always"}
        contentContainerStyle={styles.scrollView}
      >
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
              <MarqueeText
                marqueeOnStart={true}
                speed={0.05}
                style={styles.title}
              >
                {movie.title}
              </MarqueeText>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default Movies;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  test: {
    width: "100%",
  },
  item: {
    width: "33%",
    backgroundColor: "none",
  },
  contentWrapper: {},

  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
