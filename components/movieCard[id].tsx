import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import movies from "../data/moviedata.js";

const Movies = () =>
  movies.map((movie) => {
    return (
      <Card mode="outlined">
        <Card.Content>
          <Title>{movie.title}</Title>
          {/* <Paragraph>Card content</Paragraph> */}
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
    );
  });
