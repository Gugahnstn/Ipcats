import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/style";

import theme from "./styles/theme";

import Hero from "./templates/Hero";
import Home from "./pages/Home";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;