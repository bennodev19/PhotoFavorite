import React, { useState } from "react";
import styled from "styled-components/native";
import PhotoListView from "./components/PhotoListView";

const PhotosScreen = () => {
  const [placeholderList] = useState(
    Array(100)
      .fill(0)
      .map((_, i) => ({ id: String(i + 1), title: `Title ${i + 1}` }))
  );

  return (
    <Wrapper>
      <PhotoListView items={placeholderList} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;

  /* children */
  justify-content: center;
  align-items: center;
`;

export default PhotosScreen;
