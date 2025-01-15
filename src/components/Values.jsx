import React from "react";
import FeatureCard from "./FeatureCard";
import { insights, values } from "../utils/data";

const Values = () => {
  return (
    <section className="flex justify-center mt-[32px]">
      {/* Main container */}
      <section id="hero" className="w-full app__container  px-[48px]">
        {/* Title */}
        <div className="font-bold text-[20px] mb-3">Our values</div>

        {/* Info */}
        <div className="font-normal text-[16px] mb-10 w-[60%]">
          Our values reflect who we are and support our mission of building
          brighter futures by finding new and better ways to help our clients,
          colleagues and communities thrive.
        </div>

        {/* Feature items container */}
        <div className="w-full flex gap-5 gap-y-10 flex-wrap">
          {values?.map((insight) => {
            const { content, id, imgUrl, link, title } = insight;
            return (
              <FeatureCard
                content={content}
                key={id}
                imgUrl={imgUrl}
                link={link}
                title={title}
                titleStyle={"!h-fit"}
                hideButton={true}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Values;
