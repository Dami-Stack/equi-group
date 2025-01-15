import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { report } from "../assets/images";

const RiskReport = () => {
  return (
    <section
      className="w-full py-6 bg-[#f4f4f4]  text-secondary flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full py-10   flex items-center h-auto app__container px-[48px] gap-[60px]"
      >
        <div className="rounded-md h-[272px] ml-[120px] min-w-[204px] overflow-hidden shadow-2xl">
          <img
            src={report}
            alt="Report"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col h-full  justify-between py-1">
          <div className="">
            <div className="text-md font-semibold">People strategy</div>
            <div className="text-3xl font-semibold text-primary-110 my-3">
              People risk report
            </div>
            <div className="font-medium text-lg">
              Get insights on the biggest people risks facing organisations{" "}
              <br /> today and how to mitigate these to create a more
              sustainable <br />
              business.
            </div>
          </div>
          <Button endIcon={arrowRight} size={"medium"}>
            <div className="text-secondary text-sm font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Download the report
            </div>
          </Button>
        </div>
      </section>{" "}
    </section>
  );
};

export default RiskReport;
