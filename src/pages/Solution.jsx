import React from "react";
import {
  Contact,
  Disclaimer,
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

const Solution = () => {
  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
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

      {/* Report */}
      <RiskReport />

      {/* Lifestyle */}
      <Lifestyle />

      {/* Team */}
      <Team />

      {/* InfoBlock */}
      <InfoBlock />

      {/* Values */}
      <Values />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Solution;
