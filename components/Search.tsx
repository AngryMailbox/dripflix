import React, { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import {
  Card,
  Dialog,
  Portal,
  Searchbar,
  Button,
  Paragraph,
  Provider,
} from "react-native-paper";
import { CardCover } from "react-native-paper/lib/typescript/components/Card/CardCover";
import { searchMovie } from "../app/core";
import MarqueeText from "react-native-marquee";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [movie, setMovie] = useState({
    title: "none",
    release_date: "none",
    original_language: "none",
    vote_average: "none",
    overview: "none",
  });
  let bool = false;

  const onChangeQuery = async (query) => {
    if (query.length == 0) {
      setQuery(query);
      setMovies([]);
    } else {
      setQuery(query);
      const data = await searchMovie(query);
      setMovies(data);
    }
  };

  return (
    <Provider>
      <>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeQuery}
          value={query}
          style={{ backgroundColor: "#353535" }}
          loading={bool}
        />
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
        <ScrollView>
          {movies.map((movie) => (
            <Card
              onPress={() => {
                console.log("pressed");
                setMovie(movie);
                setDialog(true);
              }}
              mode={"elevated"}
              key={movie.id}
              style={styles.card}
            >
              <Card.Content style={styles.contentWrapper}>
                <View style={styles.flexWrap}>
                  <Card.Cover source={{ uri: movie.img }} style={styles.pic} />
                  <SafeAreaView>
                    <MarqueeText
                      marqueeOnStart={true}
                      speed={0.05}
                      style={styles.title}
                    >
                      {movie.title}
                    </MarqueeText>
                  </SafeAreaView>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    color: "#353535",
    backgroundColor: "#353535",
    flexGrow: 1,
  },
  card: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    boxShadow: "0 4 4 rgba(0, 0, 0, 0.25)",
  },
  contentWrapper: {
    borderRadius: 10,
    backgroundColor: "#353535",
  },
  flexWrap: {
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#353535",
  },
  pic: {
    width: 115,
    height: 80,
    marginLeft: 0,
    //borderRadius: 12,
  },
  title: {
    textOverflow: "none",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginLeft: 10,
    color: "white",
    fontSize: 14,
  },
});
