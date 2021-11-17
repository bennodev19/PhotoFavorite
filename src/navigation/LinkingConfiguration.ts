import * as Linking from "expo-linking";
import { LinkingOptions } from "@react-navigation/native";

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
} as LinkingOptions<any>;
