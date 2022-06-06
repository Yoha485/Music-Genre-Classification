import React, { useState } from "react";
import { FileInput } from "./components/FileInput/FileInput";
import { AppContainer, ResultContainer } from "./styles";
import { Bars } from "react-loader-spinner";

function App() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <AppContainer>
      <ResultContainer>
        {(loading && <Bars color="#0ead69"></Bars>) || result}
      </ResultContainer>
      <FileInput setResult={setResult} setLoading={setLoading} />
    </AppContainer>
  );
}

export default App;
