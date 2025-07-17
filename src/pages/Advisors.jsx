import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";
import { sustainability1, sustainability2 } from "../assets/images";

const Advisors = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://cdn.pixabay.com/photo/2016/09/28/08/33/town-sign-1699981_1280.jpg",
    header: "Advisors",
  });

  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);
  const advisors = [
    {
      title: "Financial Adviser",
      content: [
        {
          title: "Company",
          content: "Guild Financial Advisory Limited",
        },
        {
          title: "Address",
          content: "382 Russell Court	Woburn Place, London WC1H 0NH",
        },
        {
          title: "Email Address",
          content: "tomas.klaassen@guildfin.co.uk",
        },
        {
          title: "Phone Number",
          content: "07834 458 095",
        },
      ],
    },
    {
      title: "Registrar",
      content: [
        {
          title: "Company",
          content: "Neville Registrars Limited",
        },
        {
          title: "Address",
          content: "Neville House Steelpark Road Halesowen B62 8HD",
        },
        {
          title: "Email Address",
          content: "info@nevilleregistrars.co.uk",
        },
        {
          title: "Phone Number",
          content: "0121 585 1131",
        },
      ],
    },
    {
      title: "Trading Platform",
      content: [
        {
          title: "Company",
          content: "JP Jenkins",
        },

        {
          title: "Address",
          content: "5th Floor 101 Wigmore St London W1U 1QU",
        },

        {
          title: "Email Address",
          content: "info@jpjenkins.com",
        },

        {
          title: "Phone Number",
          content: "0207 469 0937",
        },
      ],
    },
  ];

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Contact details */}
      <div className="px-6 md:px-10 lg:px-[80px] w-full flex flex-col items-center py-16 bg-[#FAF9F4]">
        {advisors?.map((advisor, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 1 && "py-4 my-4 border-y border-y-primary-110"
              } flex flex-col gap-4 w-full `}
            >
              <div className="font-bold text-primary-110">{advisor?.title}</div>

              {advisor?.content?.map((singleContent) => {
                return (
                  <div
                    className={`w-full  flex-col md:flex-row  flex gap-3 justify-center`}
                  >
                    <div className="font-bold">{singleContent?.title}</div>
                    <div className="text-center">{singleContent?.content}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Advisors;
