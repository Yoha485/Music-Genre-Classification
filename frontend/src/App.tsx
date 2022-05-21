import React, { useState } from "react";
import { FileInput } from "./components/FileInput/FileInput";
import { AppContainer, ResultContainer } from "./styles";

function App() {
  const [result, setResult] = useState<string | null>(null)

  return (
    <AppContainer>
      <ResultContainer>
        {result}
      </ResultContainer>
      <FileInput setResult={setResult} />
    </AppContainer>
  );
}

export default App;
