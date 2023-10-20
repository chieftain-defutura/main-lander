import React from "react";
import Hero from "../components/Hero";
import Impacts from "../components/Impacts";
import Origin from "../components/Origin";
import OurVision from "../components/OurVision";
import Capabilities from "../components/Capabilities";
import SuccessStories from "../components/SuccessStories";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Impacts />
      <Origin />
      <OurVision />
      <Capabilities />
      <SuccessStories />
      {/* <SocialMedia /> */}
      {/* <HeroSlider /> */}
    </div>
  );
};

export default Home;
