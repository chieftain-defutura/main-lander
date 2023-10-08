import React from "react";
import Impacts from "./components/Impacts";
import Origin from "./components/Origin";
// import InfrasctructureSlider from "./components/Slider/InfrastructureSlider";
// import HeroSlider from "./components/Slider/HeroSlider";

const App: React.FC = () => {
  return (
    <div>
      <Impacts />
      <Origin />
      {/* <HeroSlider /> */}
    </div>
  );
};

export default App;
