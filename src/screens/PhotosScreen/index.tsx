import React from "react";
import styled from "styled-components/native";
import PhotoListView from "./components/PhotoListView";
import { ActivityIndicator } from "react-native";
import useDataApi from "../../hooks/useDataApi";
import { ItemType } from "./components/PhotoListView/PhotoListView";

const PhotosScreen = () => {
  const [{ data, isLoading }] = useDataApi<ItemType>(
    [],
    "https://picsum.photos/v2/list?page=3&limit=100"
  );

  return (
    <Container>
      {isLoading ? <ActivityIndicator /> : <PhotoListView items={data} />}
    </Container>
  );
};

export default PhotosScreen;

const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;
