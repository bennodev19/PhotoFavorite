import React from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";

const MARGIN_HORIZONTAL = 16;

const ItemView: React.FC<ItemViewProps> = (props) => {
  const { title } = props;
  const { width } = useWindowDimensions();

  return (
    <Container width={width}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ItemView;

type ItemViewProps = {
  title: string;
};

const Container = styled.View<{ width: number }>`
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width - MARGIN_HORIZONTAL * 2}px;
  height: ${({ width }) => width - MARGIN_HORIZONTAL * 2}px;
  margin: 8px ${MARGIN_HORIZONTAL}px;

  background-color: #16446e;
`;

const Title = styled.Text`
  font-size: 16px;
  color: white;
`;
