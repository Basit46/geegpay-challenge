import React from "react";
import search from "../../assets/search.svg";
import pic from "../../assets/user-pic.png";
import { useTheme } from "../../context/ThemeContext";
import { Calendar } from "iconsax-react";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ isOpen, setIsOpen }) => {
  const { isDarkMode } = useTheme();

  return (
    <header className="w-full flex items-center px-[20px] py-[18px] border-b border-[#E5EAEF]">
      <span className="flex-1 flex items-center gap-[5px]">
        <img className="block xmd:hidden" src={logo} alt="logo" />
        <span className=" xmd:hidden text-[20px] text-gray-400">/</span>
        <h1
          className={`${
            isDarkMode ? "text-white" : "text-[#26282C]"
          }  xmd:flex-1 text-[20px] font-semibold`}
        >
          Dashboard
        </h1>
      </span>

      <div
        className={`${
          isDarkMode
            ? "bg-transparent text-white"
            : "xmd:bg-white text-[#A3A3A3]"
        } hidden vsm:flex xl:w-[333px] xmd:h-[48px] rounded-[24px] p-[10px] xmd:px-[16px]  focus:border-gray-900 outline-none items-center gap-[8px] border border-[#DADDDD]`}
      >
        <img className="h-[18px] w-[18px]" src={search} alt="search icon" />
        <input
          tabIndex={1}
          className="hidden xmd:block outline-none border-none bg-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div
        tabIndex={1}
        className="hidden xl:flex ml-[38px] mr-[36px] gap-[10px] p-[8px] focus:rounded-full outline-none focus:bg-gray-200"
      >
        <Calendar size={20} className={`${isDarkMode && "text-white"} `} />
        <p className="font-medium font-Inter text-[14px]">November 15, 2023</p>
      </div>

      <div
        tabIndex={1}
        className={`hidden vsm:grid ml-[10px] xmd:ml-[38px] xl:ml-0 mr-[20px] w-[40px] h-[40px] border-[0.69px] border-[#DADDDD] focus:bg-gray-200 outline-none rounded-full place-items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
            fill={isDarkMode ? "white" : "#0D062D"}
          />
        </svg>
      </div>

      <div
        tabIndex={1}
        className={` py-[6px] px-[8px] rounded-[28px] border-[0.69px] border-[#DADDDD] focus:bg-gray-200 flex gap-[5px] vsm:gap-0 items-center`}
      >
        <img className="w-[38px] h-[38px]" src={pic} alt="user" />
        <span className="hidden xmd:block ml-[8px] mr-[12px] font-Inter">
          <p
            className={`${
              isDarkMode ? "text-white" : "text-[#26282C]"
            } text-right`}
          >
            Justin Bergson
          </p>
          <p
            className={`${
              isDarkMode ? "text-white/80" : "text-[#787486]"
            } text-right text-[14px]`}
          >
            Justin@gmail.com
          </p>
        </span>

        <svg
          tabIndex={1}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
            fill={isDarkMode ? "white" : "#0D062D"}
          />
        </svg>
      </div>

      <button className="xmd:hidden ml-[10px] vsm:ml-[20px]">
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="text-[25px] text-[red] cursor-pointer"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className="text-[25px] text-gray-600 cursor-pointer"
          />
        )}
      </button>
    </header>
  );
};

export default Header;
