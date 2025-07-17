import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";
import { sustainability1, sustainability2 } from "../assets/images";

const HowToInvest = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://cdn.pixabay.com/photo/2024/09/20/22/43/seedling-9062507_1280.png",
    header: "How To Invest",
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

      {/* Operational sustainability */}
      <CareerBlock
        color={"#FAF9F4"}
        title={"How To Invest"}
        image={sustainability2}
        subTitle1={
          "Equiserve Group Limited (EGL: JPJ) has appointed JP Jenkins to facilitate trading (buy/sell) in its Ordinary Shares. This will allow new and existing shareholders to trade their shares through matching bargaining."
        }
        subTitle2={
          "JP Jenkins is a trading name of Infinitx Limited, a company incorporated in England & Wales with registered number 11551708 and whose registered office is at 101 Wigmore Street, 5th Floor, London, England, W1U 1QU (JPJ). JPJ (FRN 950991) is an appointed representative of Prosper Capital LLP (FRN 453007) (Prosper), which is authorised and regulated by the Financial Conduct Authority."
        }
        boldSubTitle={
          "• All enquiries to buy and sell shares should be directed to your stockbroker or the J P Jenkins platform."
        }
      />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default HowToInvest;
