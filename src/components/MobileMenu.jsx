import React from "react";
import { Link } from "react-router-dom";
import { equiserveLogo } from "../assets/images";

const MobileMenu = ({ isOpen, toggleMenu, navbarData }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-white z-[999] transform backdrop-blur-none ${
        isOpen ? "translate-x-0" : "-translate-x-full "
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between px-5 pt-[32px]">
        <img src={equiserveLogo} alt="" className="w-[87px]" />
        <button onClick={toggleMenu} className="text-3xl">
          &times;
        </button>
      </div>

      {/* MID SECTION (LINKS) */}

      <ul className="flex flex-col items-center gap-4 mt-12">
        <li className="text-center w-full px-4 py-2 cursor-pointer hover:bg-primary-65">
          <Link to={"/"} className={"w-full text-center"} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        {navbarData.map((singleNavbarData, index) => (
          <Link
            to={singleNavbarData?.url}
            className={"w-full text-center "}
            onClick={toggleMenu}
            key={index}
          >
            <li
              key={index}
              className="relative w-full  px-4 py-2 cursor-pointer hover:bg-primary-65 b-22-30-500"
            >
              {singleNavbarData.title}
            </li>
          </Link>
        ))}
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
