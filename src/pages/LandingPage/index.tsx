import Header from "../../components/Header"
import Context from "../../components/Context"
import Search from "../../components/Search"
import { Container } from "./style"
// import CompoMap from "../../components/CompoMap"

const LandingPage = () => {
  return(
    <Container>
      <Header />
      <Context />
      <Search />
      {/* <CompoMap /> */}
    </Container>
  );
}

export default LandingPage;