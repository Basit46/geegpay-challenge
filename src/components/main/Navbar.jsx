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
import category from "../../assets/category.svg";
import bright from "../../assets/brightness.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../context/ThemeContext";
// import { CiBrightnessUp } from "react-icons/ci";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`${
        isDarkMode ? "bg-transparent" : "bg-[#F7F8FA]"
      } w-[80px] py-[20px] border-r border-r-[#EBECF2] flex flex-col items-center`}
    >
      <img src={logo} alt="logo" />

      <div className="categs w-full mt-[28px] flex flex-col items-center gap-[32px]">
        <div tabIndex={1} className="mb-[8px]">
          <img className="h-[24px] w-[24px]" src={category} alt="icon" />
        </div>
        <div tabIndex={1}>
          <TrendUp color="#b2abab" />
        </div>
        <div tabIndex={1}>
          <Profile2User color="#b2abab" />
        </div>
        <div tabIndex={1}>
          <Box color="#b2abab" />
        </div>
        <div tabIndex={1}>
          <DiscountShape color="#B2ABAB" />
        </div>
        <div tabIndex={1}>
          <InfoCircle color="#b2abab" />
        </div>
      </div>

      <div className="mt-[16px] px-[7.5px] py-[6.56px] bg-white rounded-[100px] flex flex-col gap-[16px] items-center">
        <img
          onClick={toggleDarkMode}
          tabIndex={1}
          className={`${
            !isDarkMode && "bg-[#34CAA5]"
          }  rounded-full p-[7px] outline-none focus:bg-[#34CAA5] cursor-pointer`}
          src={bright}
          alt="icon"
        />
        <img
          onClick={toggleDarkMode}
          tabIndex={1}
          className={`${
            isDarkMode && "bg-[#34CAA5] text-white"
          } outline-none focus:w-[28px] focus:h-[28px] focus:p-[2px] focus:bg-[#34CAA5] rounded-full cursor-pointer`}
          src={moon}
          alt="icon"
        />
      </div>

      <div className="w-full categs flex-1 flex justify-end flex-col items-center gap-[32px] ">
        <div tabIndex={2}>
          <ArrowCircleRight2 color="#b2abab" />
        </div>
        <div tabIndex={2}>
          <Setting2 color="#b2abab" />
        </div>
        <div tabIndex={2}>
          <Logout color="#b2abab" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
