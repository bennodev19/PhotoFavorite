import React, { Dispatch } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from 'react-redux';

import { CounterActionT,
  increment as incrementAction,
  decrement as decrementAction,
} from "../store/actionCreators";
import { StoreT } from "../store/reducer";

const CounterScreen = () => {
  const dispatch = useDispatch<Dispatch<CounterActionT>>();

  const increment = () => dispatch(incrementAction());
  const decrement = () => dispatch(decrementAction());

  const count = useSelector<StoreT, number>((state) => state.count);

  return (
    <Container>
      <ClickedText>Clicked {count} times</ClickedText>
      <Button onPress={increment}>
        <Text>Increment</Text>
      </Button>
      <Button onPress={decrement}>
        <Text>Decrement</Text>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #74e685;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const ClickedText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default CounterScreen;
