import React from "react";
import { FileInput } from "./components/FileInput/FileInput";
import { AppContainer, ResultContainer } from "./styles";
import { Bars } from "react-loader-spinner";
import { Background } from "./components/Background";
import useStore from "./store";

function App() {
  const loading = useStore((state: AppState) => state.loading);
  const resultGenre = useStore((state: AppState) => state.resultGenre);

  return (
    <AppContainer>
      <Background />
      <ResultContainer>{(loading && <Bars color="rgb(242, 76, 76)"></Bars>) || resultGenre}</ResultContainer>
      <FileInput />
    </AppContainer>
  );
}

export default App;
