import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Photos: {
            screens: {
              PhotosScreen: "photos",
            },
          },
          Favorites: {
            screens: {
              CounterScreen: "two",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
