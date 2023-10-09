import React from "react";
import Impacts from "./components/Impacts";
import Origin from "./components/Origin";
import OurVision from "./components/OurVision";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
// import InfrasctructureSlider from "./components/Slider/InfrastructureSlider";
// import HeroSlider from "./components/Slider/HeroSlider";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Impacts />
      <Origin />
      <OurVision />
      <Capabilities />
      <SuccessStories />
      <Footer />
      {/* <HeroSlider /> */}
    </div>
  );
};

export default App;
