import React from "react";
import { addCircle } from "../assets/icons";
import { Icon } from "@iconify/react";

const FAQCard = ({
  selectedItem,
  id,
  handleToggleSection,
  answer,
  hasSubSections,
  subsidiary,
  icon,
  title,
}) => {
  return (
    <div
      className={`cursor-pointer  border-b-[1px] border-neutral-20  w-full h-[60px]  flex flex-col justify-center`}
    >
      <div
        className={`${
          selectedItem?.id === id && "mb-1"
        } flex justify-between gap-1 items-center  transition-all ease-in-out duration-300`}
      >
        <div className="font-normal gap-3 items-center text-md  text-secondary flex mt-0">
          <Icon icon={icon} className="w-5 h-5" /> <span>{title}</span>
        </div>

        {hasSubSections && (
          <div
            className="min-w-[56px] h-[56px]  flex items-center justify-center"
            onClick={() => handleToggleSection(subsidiary)}
          >
            <img
              src={addCircle}
              alt="Dropdown"
              className={`transition-all ease-in-out w-[20px] h-[20px] !duration-[3000] cursor-pointer ${
                selectedItem?.id === id ? "rotate-45" : ""
              }`}
            />
          </div>
        )}
      </div>
      <div
        className={`${
          selectedItem?.id === id ? "h-auto opacity-100" : "h-0 opacity-0"
        } text-textColor-85 b_18_14-25-400  ease-in-out  duration-300 transition-all overflow-hidden `}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQCard;
