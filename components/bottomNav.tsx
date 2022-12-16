import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { withTheme } from "react-native-paper";
import { greenA100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Provider as PaperProvider } from "react-native-paper";
import Movies from "./movies";

const MoviesRoute = () => <Text>Movies</Text>;

const SeriesRoute = () => <Text>Series</Text>;

const StarredRoute = () => <Text>Starred</Text>;

let theme = {};

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "Movies",
      title: "movies",
      focusedIcon: "movie",
      unfocusedIcon: "movie-outline",
    },
    {
      key: "Series",
      title: "TV shows",
      focusedIcon: "television-classic",
    },
    {
      key: "Starred",
      title: "starred",
      focusedIcon: "star",
      unfocusedIcon: "star-outline",
    },
  ]);

  //key : route
  const renderScene = BottomNavigation.SceneMap({
    Movies: Movies,
    Series: SeriesRoute,
    Starred: StarredRoute,
  });

  const theme = useTheme();
  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index: index, routes }}
        barStyle={{ backgroundColor: "#202020" }}
        theme={{ dark: true }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        keyboardHidesNavigationBar={true}
      />
    </PaperProvider>
  );
};

export default BottomNav;
