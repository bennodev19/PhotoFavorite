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
        renderItem={({ item }) => (
          <ItemView download_url={item.download_url} author={item.author} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default PhotoListView;

type PhotoListViewProps = {
  items: readonly ItemType[];
};

export type ItemType = {
  id: string;
  author: string;
  download_url: string;
};

const Container = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
`;
