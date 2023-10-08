import React from "react";
import Impacts from "./components/Impacts";
import Origin from "./components/Origin";
import OurVision from "./components/OurVision";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
// import InfrasctructureSlider from "./components/Slider/InfrastructureSlider";
// import HeroSlider from "./components/Slider/HeroSlider";

const App: React.FC = () => {
  return (
    <div>
      <Impacts />
      <Origin />
      <OurVision />
      <Capabilities />
      <Footer />
      {/* <HeroSlider /> */}
    </div>
  );
};

export default App;
