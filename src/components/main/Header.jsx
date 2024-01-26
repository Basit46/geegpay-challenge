import React from "react";
import search from "../../assets/search.svg";
import calendar from "../../assets/calendar.svg";
import bell from "../../assets/bell.svg";
import pic from "../../assets/user-pic.png";
import arrow from "../../assets/arrowDown.svg";
import { useTheme } from "../../context/ThemeContext";
import { Calendar } from "iconsax-react";

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className="w-full flex items-center px-[20px] py-[18px] border-b border-[#E5EAEF]">
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-[#26282C]"
        } flex-1 text-[20px] font-semibold`}
      >
        Dashboard
      </h1>

      <div className="w-[333px] h-[48px] bg-white rounded-[24px] px-[16px]  focus:border-gray-900 outline-none flex items-center gap-[8px] border border-[#DADDDD]">
        <img className="h-[18px] w-[18px]" src={search} alt="search icon" />
        <input
          tabIndex={1}
          className="outline-none border-none text-[#A3A3A3]"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div
        tabIndex={1}
        className="ml-[38px] mr-[36px] flex gap-[10px] p-[8px] focus:rounded-full outline-none focus:bg-gray-200"
      >
        <Calendar size={20} className={`${isDarkMode && "text-white"} `} />
        <p className="font-medium font-Inter text-[14px]">November 15, 2023</p>
      </div>

      <div
        tabIndex={1}
        className={`${
          isDarkMode && "bg-white"
        } mr-[20px] w-[40px] h-[40px] border-[0.69px] border-[#DADDDD] focus:bg-gray-200 outline-none rounded-full grid place-items-center`}
      >
        <img className="h-[20px] w-[20px]" src={bell} alt="bell icon" />
      </div>

      <div
        tabIndex={1}
        className={`${
          isDarkMode && "bg-white"
        } py-[6px] px-[8px] rounded-[28px] border-[0.69px] border-[#DADDDD] focus:bg-gray-200 flex items-center`}
      >
        <img className="w-[38px] h-[38px]" src={pic} alt="user" />
        <span className="ml-[8px] mr-[12px] font-Inter">
          <p className="text-right text-[#26282C]">Justin Bergson</p>
          <p className="text-right text-[#787486] text-[14px]">
            Justin@gmail.com
          </p>
        </span>
        <img
          tabIndex={1}
          className="h-[20px] w-[20px]"
          src={arrow}
          alt="arrow"
        />
      </div>
    </header>
  );
};

export default Header;
