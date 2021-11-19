import React from "react";

export type TCounterContext = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = React.createContext<TCounterContext>({
  count: 0,
  increment: () => null,
  decrement: () => null,
  reset: () => null,
});
