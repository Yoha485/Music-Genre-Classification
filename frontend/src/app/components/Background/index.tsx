import React from "react";
import { BlurLayer, Wave1, Wave2, Wave3, Wave4, Wave5, Wave6, BackgroundContainer } from "./styles";

export const Background = () => {
  return (
    <BackgroundContainer>
      <Wave1 />
      <Wave2 />
      <BlurLayer />
      <Wave3 />
      <Wave4 />
      <Wave5 />
      <Wave6 />
    </BackgroundContainer>
  );
};
