import "./App.css";
import React from "react";
import CardDolar from "./components/ui/cardsFinanazas/CardDolar";
import CardPeso from "./components/ui/cardsFinanazas/CardPeso";
import SwitchMoneda from "./components/ui/switch/SwitchMoneda";


const App = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="switch-content">
          <SwitchMoneda/>
        </div>
        <div className="card-wrapper-content">
          {/* <CardPeso/> */}
          <CardDolar/>
        </div>
      </div>
    </>
  );
};

export default App;
