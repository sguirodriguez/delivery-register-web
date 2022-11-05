import { GoogleWrapper } from "./context/google";
import RoutesComponent from "./routes/index";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GoogleWrapper>
        <GlobalStyle />
        <RoutesComponent />
      </GoogleWrapper>
    </>
  );
}

export default App;
