import React from "react";
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
import { useTheme } from "../../context/ThemeContext";
import { BrightSvg, CategIcon, DarkSvg } from "../mini/svgs";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <nav
      className={`${isOpen ? "block xmd:hidden" : "hidden"} ${
        isDarkMode ? "bg-black text-white/80" : "bg-[#fafafa] text-gray-600"
      } mobile-nav fixed z-[2] top-[89px] left-0 bottom-0  w-full flex flex-col justify-between px-[30px] py-[30px]`}
    >
      <div className="w-fit flex flex-col gap-[15px]">
        <div
          tabIndex={0}
          onClick={() => setIsOpen(false)}
          className={`${
            isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"
          } mb-[8px]`}
        >
          <CategIcon isDarkMode={isDarkMode} />
          <p>Category</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <TrendUp color="#b2abab" />
          <p>Trends</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Profile2User color="#b2abab" />
          <p>Clients</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Box color="#b2abab" />
          <p>Gifts</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <DiscountShape color="#B2ABAB" />
          <p>Totals</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <InfoCircle color="#b2abab" />
          <p>Informations</p>
        </div>
      </div>

      <div className="w-fit flex flex-col gap-[15px]">
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <ArrowCircleRight2 color="#b2abab" />
          <p>Login</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Setting2 color="#b2abab" />
          <p>Settings</p>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
          className={`${isDarkMode ? "after:bg-white" : "after:bg-[#0d062d]"}`}
        >
          <Logout color="#b2abab" />
          <p>Logout</p>
        </div>
      </div>

      <div className="absolute top-[20px] right-[30px] w-fit  px-[7.5px] py-[6.56px] bg-white rounded-[100px] flex gap-[16px] items-center">
        <div
          tabIndex={0}
          onClick={toggleDarkMode}
          className={`${
            !isDarkMode && "bg-[#34CAA5]"
          }  rounded-full p-[7px] outline-none focus:bg-[#34CAA5] cursor-pointer`}
        >
          <BrightSvg isDarkMode={isDarkMode} />
        </div>

        <div
          tabIndex={0}
          onClick={toggleDarkMode}
          className={`${
            isDarkMode && "bg-[#34CAA5]"
          }  rounded-full p-[7px] outline-none focus:bg-[#34CAA5] cursor-pointer`}
        >
          <DarkSvg className="text-[1.8px]" isDarkMode={isDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
