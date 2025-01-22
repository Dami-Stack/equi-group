import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { arrowRight } from "../assets/icons";

const FeatureCard = ({
  hideButton = false,
  title,
  link,
  content,
  imgUrl,
  date,
  titleStyle,
}) => {
  return (
    <div class="min-w-[45%] max-w-[650px] md:flex-1 xl:min-w-[32%] xl:max-w-[370px] h-fit flex flex-col bg-white  overflow-hidden">
      {/* <!-- Card Image --> */}
      <div className="h-[250px] w-full overflow-hidden bg-black">
        <img
          src={imgUrl}
          alt="Card Image"
          class="w-full h-[250px] object-cover hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
        />
      </div>

      {/* <!-- Card Content --> */}
      <div class="flex flex-col justify-between flex-1 py-4">
        {/* <!-- Date --> */}
        {date && <p class="text-sm text-secondary leading-6 ">{date}</p>}

        {/* <!-- Title --> */}
        <h3
          class={`text-lg cursor-pointer transition-all ease-in-out duration-200 hover:text-[#EB8317]  h-[56px] font-bold text-secondary mb-2 line-clamp-2 ${titleStyle}`}
        >
          {title}
        </h3>

        {/* <!-- Description --> */}
        <p class="text-sm h-[72px] text-secondary leading-6 line-clamp-4 md:mb-3 lg:mb-12">
          {content}
        </p>

        {/* <!-- Footer with Button --> */}
        {!hideButton && (
          <Button endIcon={arrowRight} size={"medium"}>
            <div className="text-secondary text-sm font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Read more
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
