import Header from "./components/Header";
import { GlobalStyle, Container } from "./style";
import Context from "./components/Context";
import Search from "./components/Search";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Context />
      <Search />
    </Container>
  );
}

export default App;