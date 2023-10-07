import React from "react";
import Impacts from "./components/Impacts";
import InfrasctructureSlider from "./components/Slider/InfrastructureSlider";
import HeroSlider from "./components/Slider/HeroSlider";

const App = () => {
  return (
    <div className="mx">
      <Impacts />
      <HeroSlider />
    </div>
  );
};

export default App;
