import { GlobalStyle, Container } from "./style";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <LandingPage />
    </Container>
  );
}

export default App;