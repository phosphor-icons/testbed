import React from "react";

import { AppStyles, AppContainer, DemoArea } from "./App.styles";
import { Header, Menu, Grid, TestCases } from "..";

const App: React.FC<{}> = () => {
  return (
    <AppContainer>
      <AppStyles />
      <Header />
      <Menu />
      <DemoArea>
        <TestCases />
        <Grid />
      </DemoArea>
    </AppContainer>
  );
};

export default App;
