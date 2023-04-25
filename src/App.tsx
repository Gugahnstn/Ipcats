import { IpSearchProvider } from "./contexts/ip-search";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import theme from "./styles/theme";
import Home from "./screens/Home";


const App = () => {
  return (
    <IpSearchProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </IpSearchProvider>
  );
};

export default App;
