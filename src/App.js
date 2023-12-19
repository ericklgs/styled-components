import React from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";

console.log(temaClaro, temaOscuro);

function App() {
  return (
    <ThemeProvider theme={ temaClaro }>
      <GlobalStyle />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
