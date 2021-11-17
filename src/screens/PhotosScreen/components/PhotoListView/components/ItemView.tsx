import React from "react";
import styled from "styled-components/native";

const ItemView: React.FC<ItemViewProps> = (props) => {
  const { title } = props;
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default ItemView;

type ItemViewProps = {
  title: string;
};

const Container = styled.View`
  background-color: #f9c2ff;
  padding: 20px;
  margin: 8px 16px;
`;

const Title = styled.Text`
  font-size: 32px;
`;
