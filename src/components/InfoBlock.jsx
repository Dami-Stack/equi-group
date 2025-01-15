import React from "react";
import { dna, heroImg, lifestyle } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight } from "../assets/icons";

const InfoBlock = () => {
  // Inline style to set the background image

  const bgImage =
    "https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="w-full dna__gradient overflow-hidden bg-tertiary text-white h-[calc(100vh-90px)] max-h-[500px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full flex items-center h-full app__container px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className=" font-bold  text-[50px] leading-[56px] text-left">
              Our DNA
            </div>

            <div className="my-5 font-bold text-[20px]  md:text-left text-left w-full ">
              We act with integrity, a client-focused mindset, and an <br />
              entrepreneurial drive, and embrace diversity and inclusive growth.{" "}
              <br /> This is our DNA and on this fulcrum, we build our global
              business.
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute -right-[300px] rounded-xl overflow-hidden">
            <img src={dna} alt="" className="h-[500px] w-auto" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default InfoBlock;
