import React from "react";
import { heroImg, heroImg2, heroImg3 } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight, arrowRightWhite } from "../assets/icons";

const Hero = () => {
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
      className="w-full overflow-hidden bg-white hero__gradient text-secondary h-auto lg:h-[100vh] lg:max-h-[620px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full flex items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-5 font-bold text-[20px]  md:text-left text-left w-full ">
              Invest in Africa's future.
            </div>

            <div className=" font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[46px] sm:leading-[48px] lg:leading-[56px] text-left">
              Partner with EQUISERVE <br /> for sustainable finance <br />{" "}
              solutions.
            </div>
          </div>

          {/* Bottom - CTA */}
          {/* RHS */}
          <div className="group w-fit bg-secondary py-3 px-6 rounded-md flex items-center relative cursor-pointer">
            {/* <div className="group w-fit  flex items-center relative cursor-pointer"> */}
            <div className="text-white text-[16px] font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Learn more
            </div>
            <div className="w-fit overflow-hidden flex items-center">
              <img
                src={arrowRightWhite}
                alt="Arrow right"
                className="hover-slide-in-top transition-all ease-linear"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex sm:justify-center lg:absolute lg:right-[-20px] xl:right-10 2xl:right-20 bounce-tilt">
            <img
              src={heroImg3}
              alt=""
              className="h-[300px] sm:h-[400px] 2xl:h-[500px] w-auto"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
