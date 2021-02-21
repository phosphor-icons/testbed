import React from "react";

import { AppContainer, AppHeader, DemoArea } from "./App.styles";
import { Menu, Grid, TestCases } from "..";



const App: React.FC<{}> = () => {
  return (
    <AppContainer>
      <AppHeader>
        <h1>Phosphor Testbed</h1>
        <p>Test new icons for consistency, alignment, usability in context</p>
      </AppHeader>
      <Menu />
      <DemoArea>
        <Grid />
        <TestCases />
      </DemoArea>
    </AppContainer>
  );
}

export default App;
