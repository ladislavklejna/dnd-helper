import { Container } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dice from "./components/Dice";
function App() {
  return (
    <div className="App">
      <Container className="xxx">
        <Dice />
      </Container>
    </div>
  );
}

export default App;
