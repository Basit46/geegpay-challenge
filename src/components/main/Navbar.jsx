import {
  ArrowCircleRight2,
  Box,
  DiscountShape,
  InfoCircle,
  Logout,
  Profile2User,
  Setting2,
  TrendUp,
} from "iconsax-react";
import React from "react";
import logo from "../../assets/logo.svg";
import { useTheme } from "../../context/ThemeContext";
import { BrightSvg, CategIcon, DarkSvg } from "../mini/svgs";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`${
        isDarkMode ? "bg-transparent" : "bg-[#F7F8FA]"
      } hidden xmd:flex w-[80px] py-[20px] border-r border-r-[#EBECF2] flex-col items-center`}
    >
      <img src={logo} alt="logo" />

      <div className="categs w-full mt-[28px] flex flex-col items-center gap-[32px]">
        <div
          tabIndex={0}
          className={`${
            isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"
          } mb-[8px]`}
        >
          <CategIcon isDarkMode={isDarkMode} />
        </div>
        <div
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <TrendUp color="#b2abab" />
        </div>
        <div
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Profile2User color="#b2abab" />
        </div>
        <div
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Box color="#b2abab" />
        </div>
        <div
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <DiscountShape color="#B2ABAB" />
        </div>
        <div
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <InfoCircle color="#b2abab" />
        </div>
      </div>

      <div className="mt-[16px] px-[7.5px] py-[6.56px] bg-white rounded-[100px] flex flex-col gap-[16px] items-center">
        <div
          tabIndex={0}
          onClick={toggleDarkMode}
          className={`${
            !isDarkMode && "bg-[#34CAA5]"
          }  rounded-full p-[7px] outline-none focus:bg-[red] cursor-pointer`}
        >
          <BrightSvg isDarkMode={isDarkMode} />
        </div>

        <div
          tabIndex={0}
          onClick={toggleDarkMode}
          className={`${
            isDarkMode && "bg-[#34CAA5]"
          }  rounded-full p-[7px] outline-none focus:bg-[red] cursor-pointer`}
        >
          <DarkSvg className="text-[1.8px]" isDarkMode={isDarkMode} />
        </div>
      </div>

      <div className="w-full categs flex-1 flex justify-end flex-col items-center gap-[32px] ">
        <div
          tabIndex={-1}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <ArrowCircleRight2 color="#b2abab" />
        </div>
        <div
          tabIndex={-1}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Setting2 color="#b2abab" />
        </div>
        <div
          tabIndex={-1}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Logout color="#b2abab" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
