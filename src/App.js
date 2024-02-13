import { Container } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dice from "./components/Dice";
import HeroHUD from "./components/HeroHUD/HeroHUD";
import MakeHero from "./components/MakeHero.jsx/MakeHero";
import { useState } from "react";
function App() {
  const [confirm, setConfirm] = useState(false);
  const isConfirmed = () => {
    setConfirm(true);
  };
  return (
    <div className="App">
      <Container className="xxx">
        {!confirm && <MakeHero confirmed={isConfirmed} />}
        {confirm && (
          <>
            <HeroHUD />
            <Dice />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
