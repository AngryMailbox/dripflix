import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import movies from "../data/moviedata.js";
import { StyleSheet } from "react-native";

const Movies = () =>
  movies.map((movie) => {
    return (
      <Card mode="contained">
        <Card.Content>
          <Title>{movie.title}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
    );
  });
