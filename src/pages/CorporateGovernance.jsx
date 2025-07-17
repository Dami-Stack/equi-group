import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  CustomInfoBlock,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";
import { aimMissionVision, execs } from "../utils/data";

const CorporateGovernance = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://cdn.pixabay.com/photo/2022/11/08/01/34/background-7577472_1280.jpg",
    header: "Corporate Governance",
  });

  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Benefits at Equiserve */}
      <CareerBlock
        color={"#FAF9F4"}
        title={
          "Equiserve Group Limited has decided to adopt and uphold the highest standard of Corporate Governance and, as such, has constituted two board committees, the Nomination and Remuneration Committee and the Audit Committee."
        }
        image={
          "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
        }
        subTitle1={
          "The Board of Directors has continued to have an open communication with its shareholders and provide timely information about the progress of the company."
        }
        subTitle2={
          "In addition to the statutory Annual General Meeting, regular meetings and presentations on a Bi-Annual basis will be made available on the company’s website."
        }
      />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default CorporateGovernance;
