import React from "react";
import { contact, heroImg, lifestyle } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight } from "../assets/icons";

const Contact = () => {
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
      className="w-full bg-[#00bee0] contact__gradient text-white h-[calc(100vh-90px)] max-h-[620px] flex justify-center z-10 overflow-hidden"

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
              Let's talk
            </div>

            <div className="my-5 font-bold text-[20px]  md:text-left text-left w-full ">
              Tell us your needs and our consultants will guide <br /> providing
              you down the right path.
            </div>
          </div>

          {/* Bottom - CTA */}
          {/* RHS */}
          <div className="group w-fit bg-white py-3 px-6 rounded-md flex items-center relative cursor-pointer">
            {/* <div className="group w-fit  flex items-center relative cursor-pointer"> */}
            <div className="text-secondary text-[16px] font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Get in touch
            </div>
            <div className="w-fit overflow-hidden flex items-center">
              <img
                src={arrowRight}
                alt="Arrow right"
                className="hover-slide-in-top transition-all ease-linear"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute -top-[50px] -right-20 rounded-xl overflow-hidden">
            <img src={contact} alt="" className="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
