import React from "react";
import styled from "styled-components/native";
import { Alert, useWindowDimensions } from "react-native";
import { ItemType } from "../PhotoListView";

const MARGIN_HORIZONTAL = 16;

const ItemView: React.FC<ItemViewProps> = (props) => {
  const { download_url, author } = props;
  const { width } = useWindowDimensions();

  const handlePress = React.useCallback(
    (author: string) =>
      Alert.alert("Artist", author, [{ text: "OK" }], { cancelable: false }),
    []
  );

  return (
    <Container width={width} onPress={() => handlePress(author)}>
      <StyledImage source={{ uri: download_url }} />
    </Container>
  );
};

export default ItemView;

type ItemViewProps = Omit<ItemType, "id">;

const Container = styled.TouchableOpacity<{ width: number }>`
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width - MARGIN_HORIZONTAL * 2}px;
  height: ${({ width }) => width - MARGIN_HORIZONTAL * 2}px;
  margin: 8px ${MARGIN_HORIZONTAL}px;

  background-color: #16446e;
`;

const StyledImage = styled.Image`
  margin: 5px 0;
  height: 100%;
  width: 100%;
`;
