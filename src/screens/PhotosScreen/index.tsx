import React, { useState } from "react";
import styled from "styled-components/native";
import PhotoListView from "./components/PhotoListView";
import { ActivityIndicator } from "react-native";

const PhotosScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch images
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=3&limit=100"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
