import React from "react";
import {
  Contact,
  Divider,
  Featured,
  Hero,
  ImageCarousel,
  InfoBlock,
  Lifestyle,
  RiskReport,
  Solutions,
  Team,
  Values,
} from "../components";

const Home = () => {
  return (
    <div className="z-10 relative bg-white">
      {/* Hero section */}
      <Hero />

      {/* Divider */}
      <Divider spacing="mb-[32px]" />

      {/* Insights section */}
      <Featured />

      {/* Divider */}
      <Divider spacing="my-[32px]" />

      {/* Solutions Section */}
      <Solutions />

      {/* Lifestyle */}
      <Lifestyle />

      {/* Team */}
      <Team />

      {/* Report */}
      <RiskReport />

      {/* InfoBlock */}
      <InfoBlock />

      {/* Values */}
      <Values />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
