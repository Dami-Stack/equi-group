import React, { useEffect, useState } from "react";
import {
  CareerBlock,
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
  SubpageHero,
  Team,
  Values,
} from "../components";

const ContactPage = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1920&h=8630&dpr=2",
    header: "Get In Touch With Us",
  });

  const contactDetails = [
    {
      title: "Address:",
      content: "224 Old Bond Street Mayfair, London W1S 4AP United Kingdom",
    },
    {
      title: "Phone Number:",
      content: "+44 (0) 330 13 317 04",
    },
    {
      title: "Hours:",
      content: "Mon-Fri 8:00AM – 5:00PM",
    },
    {
      title: "Email:",
      content: "info@equiserve.com",
    },
  ];

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

      {/* Contact details */}
      <div className="px-6 md:px-10 lg:px-[80px] w-full flex flex-col items-center py-16 bg-[#FAF9F4]">
        <div className="mb-28">
          <div className="text-sm text-center">
            We would love to hear from you.
          </div>
          <div className="text-lg font-medium text-center">
            Feel free to reach out using the below details.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {contactDetails?.map(({ title, content }, index) => {
            return (
              <div className="flex gap-3 justify-center" key={index}>
                <div className="font-bold">{title}</div>
                <div className="text">{content}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default ContactPage;
