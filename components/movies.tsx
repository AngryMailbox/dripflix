import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
  Portal,
  Dialog,
  Provider,
} from "react-native-paper";
//import movies from "../data/moviedata.js";
import { StyleSheet } from "react-native";
import SearchBar from "./Search";

import { getContent } from "../app/core";
import MarqueeText from "react-native-marquee";
import { Route } from "react-router-native";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [movie, setMovie] = useState({
    title: "none",
    release_date: "none",
    original_language: "none",
    vote_average: "none",
    overview: "none",
  });

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    let data = await getContent("trending");
    setMovies(data);
  }

  return (
    <>
      <Text style={styles.headTitle}>Trending right now</Text>
      <Provider>
        <TouchableWithoutFeedback>
          <ScrollView
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
            bounces={true}
            overScrollMode={"always"}
            contentContainerStyle={styles.scrollView}
          >
            <Portal>
              <Dialog visible={dialog} onDismiss={() => setDialog(false)}>
                <Dialog.Title>{movie.title}</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Released: {movie.release_date} {"\n"}
                    Language: {movie.original_language} {"\n"}
                    Score: {movie.vote_average} {"\n"}
                    {"\n"}
                    Description: {movie.overview}
                  </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => setDialog(false)}>Go back</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            {movies.map((movie) => (
              <Card
                onPress={() => {
                  console.log("pressed");
                  setMovie(movie);
                  setDialog(true);
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
      </Provider>
    </>
  );
};
export default Movies;

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#353535",
    padding: 10,
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    backgroundColor: "#353535",
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
