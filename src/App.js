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
  const storedData = JSON.parse(localStorage.getItem("hero"));

  return (
    <div className="App">
      <Container className="xxx">
        {!storedData && <MakeHero confirmed={isConfirmed} />}
        {(confirm || storedData) && (
          <>
            <HeroHUD />
            <Dice />
          </>
        )}
        {/* <MakeHero /> */}
      </Container>
    </div>
  );
}

export default App;
