import React, { useState } from "react";
import { Link } from "react-router-dom";
import { equiserveLogo } from "../assets/images";
import { miniNavbarData, subsidiaries } from "../utils/data";
import FAQCard from "./FAQCard";
import { addCircle, searchNormal } from "../assets/icons";
import { Icon } from "@iconify/react";

const MobileMenu = ({
  isOpen,
  toggleMenu,
  navbarData,
  subsidiariesList,
  handleInputChange,
}) => {
  // Selected Subsidiary
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle the expansion and contraction of a section
  const handleToggleSection = (item) => {
    if (item?.id === selectedItem?.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };
  // End of unction to handle the expansion and contraction of a section

  return (
    <div
      className={`fixed top-0 left-0  w-screen h-[100vh] overflow-y-auto bg-white z-[999] transform backdrop-blur-none ${
        isOpen ? "translate-x-0" : "-translate-x-full "
      } transition-transform duration-300 ease-in-out w-full`}
    >
      <div className="flex justify-between px-5 pt-[32px] items-center">
        <img src={equiserveLogo} alt="" className="w-[120px]" />
        <button onClick={toggleMenu} className="text-3xl">
          &times;
        </button>
      </div>

      {/* MID SECTION (LINKS) */}

      <ul className="flex flex-col items-center gap-4 mt-12 px-5">
        <li className="h-[56px] border-b-[1px] border-b-[#000] w-full px-4 py-2 cursor-pointer hover:bg-primary-65">
          <Link to={"/"} className={"w-full text-left "} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        {miniNavbarData.map((singleNavbarData, index) =>
          singleNavbarData?.type === "link" ? (
            <Link
              to={singleNavbarData?.url}
              className={
                "w-full text-center border-b-[1px] border-b-[#000] h-[56px]"
              }
              onClick={toggleMenu}
              key={index}
            >
              <li
                key={index}
                className="relative w-full text-left px-4 py-2 cursor-pointer hover:bg-primary-65 b-22-30-500"
              >
                {singleNavbarData.title}
              </li>
            </Link>
          ) : (
            <FAQCard
              key={singleNavbarData?.id}
              icon={singleNavbarData?.icon}
              subsidiary={singleNavbarData}
              title={singleNavbarData?.title}
              selectedItem={selectedItem}
              handleToggleSection={handleToggleSection}
              hasSubSections={singleNavbarData?.subsections}
              subsections={singleNavbarData?.subsections}
              id={singleNavbarData?.id}
              containerStyle={"border-b-[#000]"}
            />
          )
        )}
        <div
          className={`cursor-pointer border-b-[1px]  border-b-[#000] min-h-[60px]  w-full  flex flex-col justify-center`}
        >
          <div
            className={`${
              selectedItem?.id === "subsidiary" && "mb-1"
            } flex justify-between gap-1 items-center  transition-all ease-in-out duration-300`}
          >
            <div className="font-normal gap-3 items-center text-md  text-secondary flex mt-0">
              <Icon icon={"lets-icons:world-2-light"} className="w-5 h-5" />{" "}
              <span>Subsidiaries</span>
            </div>

            <div
              className="min-w-[56px] h-[56px]  flex items-center justify-center"
              onClick={() => handleToggleSection({ id: "subsidiary" })}
            >
              <img
                src={addCircle}
                alt="Dropdown"
                className={`transition-all ease-in-out w-[20px] h-[20px] !duration-[3000] cursor-pointer ${
                  selectedItem?.id === "subsidiary" ? "rotate-45" : ""
                }`}
              />
            </div>
          </div>
          <div
            className={` text-secondary b_18_14-25-400  ease-in-out ${
              selectedItem?.id === "subsidiary"
                ? "h-auto opacity-100"
                : "h-0 opacity-0"
            }  duration-300 transition-all overflow-hidden `}
          >
            <div className="flex items-center justify-center w-full h-[370px]  flex-col gap-[1px] ">
              {/* Top - */}
              <div className="w-full px-[14px] pt-4 pb-5 bg-white">
                <div className="text-sm font-semibold !text-primary-110 leading-6">
                  Current Subsidiary
                </div>
                <div className="font-medium text-md  text-secondary flex mt-0">
                  <div className="flex gap-2 items-center">
                    <Icon icon="twemoji:flag-nigeria" className="w-5 h-5" />{" "}
                    <span>Nigeria - </span>
                  </div>
                  <div className="">&nbsp;Equiserve</div>
                </div>
              </div>

              {/* Bottom */}
              <div className="w-full flex flex-col bg-white flex-1  h-full px-[14px] pt-4 pb-5 overflow-auto">
                {/* Search Input */}
                <div className="mb-6 h-[44px] flex items-center justify-center px-4 gap-[10px] w-full focus-within:ring-primary ring-transparent ring-2 ring-offset-2   border border-neutral-20 rounded-[8px]">
                  <img src={searchNormal} alt="lens" className="w-5 h-5" />
                  <input
                    type="text"
                    placeholder={"Find Subsidiary"}
                    onChange={(e) => handleInputChange(e)}
                    className="h-full flex-1 text-sm text-gray-400 outline-none border-none bg-transparent"
                  />
                </div>
                <div className="overflow-auto h-[calc(100%-68px)]">
                  {subsidiariesList?.length > 0 ? (
                    subsidiariesList.map((subsidiary) => (
                      <FAQCard
                        key={subsidiary?.id}
                        icon={subsidiary?.icon}
                        subsidiary={subsidiary}
                        title={subsidiary?.title}
                        selectedItem={selectedItem}
                        handleToggleSection={handleToggleSection}
                        hasSubSections={subsidiary?.subsections}
                        subsections={subsidiary?.subsections}
                        id={subsidiary?.id}
                      />
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                      <p className="text-gray-700 text-lg">
                        No matching items found
                      </p>
                      <p className="text-gray-400 text-sm">
                        Try adjusting your search term
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>

      {/* BOTTOM (AUTH ACTIONS) */}
      {/* <div className="flex flex-col gap-[10px] items-center w-full  px-5 mt-12">
        <Button variant="outlined" size="medium" width="w-full" href="/login">
          Sign In
        </Button>
        <Button
          variant="contained"
          size="medium"
          width="w-full"
          href="/register"
        >
          Register
        </Button>
      </div> */}
    </div>
  );
};

export default MobileMenu;
