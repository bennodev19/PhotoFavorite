import React from "react";
import styled from "styled-components/native";
import { FlatList, StatusBar } from "react-native";
import ItemView from "./components/ItemView";

const PhotoListView: React.FC<PhotoListViewProps> = (props) => {
  const { items } = props;

  return (
    <Container>
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemView title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default PhotoListView;

type PhotoListViewProps = {
  items: Item[];
};

type Item = {
  id: string;
  title: string;
};

const Container = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
`;
