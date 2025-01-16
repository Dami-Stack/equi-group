import React, { useEffect, useState } from "react";
import { navbarData } from "../utils/data";
import { Link, NavLink } from "react-router-dom";
import { equiserveLogo } from "../assets/images";
import MobileMenu from "./MobileMenu";
import { Icon } from "@iconify/react";

const Navbar = ({ nav }) => {
  const isActive = false;

  //   Handles mobile screen nav visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleWidth = 1024;

  //    Function that handles mobile screen visibility toggle on windows resize
  const handleResize = () => {
    // Toggle state based on the screen width
    if (window.innerWidth >= toggleWidth) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //   Useffect to exit mobile screen mode
  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`sticky  top-0 z-[100] h-[90px] ${
          nav === "transparent" ? "bg-transparent" : "bg-white"
        }  w-full flex items-center justify-center border-b border-secondary`}
      >
        <div className="h-full app__container w-full bg-transparent px-[48px] flex items-center justify-between ">
          {/* LHS (LOGO) */}
          <div className="flex  items-center gap-10">
            {/* LHS (LOGO) */}
            <Link to={"/"}>
              <img
                src={equiserveLogo}
                alt="Logo"
                className="w-[88px] xl:w-[140px]"
              />
            </Link>

            {/* MIDDLE  */}
            <div className="hidden lg:flex gap-[32px] ">
              {navbarData?.map(({ id, title, url, type }) => {
                if (type === "link") {
                  return (
                    <NavLink to={url}>
                      {({ isActive }) => (
                        <NavbarLinkItem
                          title={title}
                          url={url}
                          key={id}
                          isActive={isActive}
                        />
                      )}
                    </NavLink>
                  );
                } else if (type === "navDropdown") {
                  return (
                    <NavbarLinkItem
                      title={title}
                      url={url}
                      key={id}
                      isActive={false}
                    />
                  );
                }
              })}
            </div>
          </div>

          {/* RHS */}
          <div className="flex gap-5">
            <div
              className={`${
                isActive
                  ? "b-20-24-600"
                  : "text-secondary text-[16px] font-semibold"
              } hover:text-primary-110 gap-2 w-fit cursor-pointer flex items-center relative text-left transition-all duration-200 ease-linear group`}
            >
              <div className=""> Contact</div>

              <div
                className={`h-[2px] bg-primary-110 text-primary-110 w-[0px] group-hover:w-full rounded-[100px] absolute left-0 -bottom-[10px] transition-all duration-300 ease-linear`}
              ></div>
            </div>
            <Icon
              icon={"lets-icons:world-2-light"}
              className="cursor-pointer text-secondary hover:text-primary-110 transition-all ease-in-out duration-300 w-7 h-7"
            />
          </div>

          {/* HAMBURGER MENU */}
          <img
            src={equiserveLogo}
            alt="menu"
            className="xl:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        navbarData={navbarData}
      />
    </>
  );
};

export default Navbar;

// Navbar link item
const NavbarLinkItem = ({ title, url, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "b-20-24-600" : "text-secondary text-[16px] font-semibold"
      } hover:text-primary-110 w-fit cursor-pointer flex items-center relative text-left transition-all duration-200 ease-linear group`}
    >
      <div className={`b-16-21-700`}>{title}</div>
      <div
        className={`!h-[2px] bg-primary-110 text-primary-110 w-[0px] group-hover:w-full rounded-[100px] absolute left-0 -bottom-[10px] z-10 transition-all duration-300 ease-linear`}
      ></div>
    </div>
  );
};
