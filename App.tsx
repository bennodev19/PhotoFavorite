import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CounterContext } from "./src/context/CounterContext";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [count, setCount] = React.useState(0);

  const counter = {
    count: count,
    increment: () => {
      setCount((prevCount) => prevCount + 1);
    },
    decrement: () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    },
    reset: () => {
      setCount(0);
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CounterContext.Provider value={counter}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </CounterContext.Provider>
      </SafeAreaProvider>
    );
  }
}
