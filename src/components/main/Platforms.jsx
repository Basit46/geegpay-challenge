import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Platforms = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-transparent border border-[#EDF2F7]" : "bg-white"
      } flex-1 rounded-[8px] p-[10px] vsm:pl-[20px] vsm:pt-[16px] vsm:pr-[16px] vsm:pb-[32px]`}
    >
      <div className="flex justify-between items-center">
        <p
          className={`${
            isDarkMode ? "text-white" : "text-[#26282C]"
          } text-[18px] font-semibold`}
        >
          Top Platform
        </p>
        <p
          tabIndex={0}
          className="text-[#34CAA5] text-[18px] font-medium focus:text-[red] focus:underline outline-none cursor-pointer"
        >
          See All
        </p>
      </div>

      <div className="mt-[17px] flex flex-col gap-[20px]">
        <div
          tabIndex={0}
          className="rounded-[10px] outline-none focus:bg-gray-100 p-[10px] hover:bg-gray-100 group"
        >
          <p
            className={`${
              isDarkMode
                ? "text-white group-focus:text-black group-hover:text-black"
                : "text-[#22242C]"
            } text-[18px] font-[600] text-[#22242C]`}
          >
            Book Bazar
          </p>
          <div className="mt-[17px] mb-[16px] relative w-full h-[12px] rounded-[40px] bg-[#F5F5F5] group-focus:bg-white group-hover:bg-white overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[245px] bg-[#6160DC] rounded-[40px]" />
          </div>
          <div className="flex items-center justify-between text-[18px] text-[#525252]">
            <p>$2,500,000</p>
            <p>+15%</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="rounded-[10px] outline-none focus:bg-gray-100 p-[10px] hover:bg-gray-100 group"
        >
          <p
            className={`${
              isDarkMode
                ? "text-white group-focus:text-black group-hover:text-black"
                : "text-[#22242C]"
            } text-[18px] font-[600] text-[#22242C]`}
          >
            Artisan Aisle
          </p>
          <div className="mt-[17px] mb-[16px] relative w-full h-[12px] rounded-[40px] bg-[#F5F5F5] group-focus:bg-white group-hover:bg-white overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[204.313px] bg-[#54C5EB] rounded-[40px]" />
          </div>
          <div className="flex items-center justify-between text-[18px] text-[#525252]">
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="rounded-[10px] outline-none focus:bg-gray-100 p-[10px] hover:bg-gray-100 group"
        >
          <p
            className={`${
              isDarkMode
                ? "text-white group-focus:text-black group-hover:text-black"
                : "text-[#22242C]"
            } text-[18px] font-[600] text-[#22242C]`}
          >
            Toy Troop
          </p>
          <div className="mt-[17px] mb-[16px] relative w-full h-[12px] rounded-[40px] bg-[#F5F5F5] group-focus:bg-white group-hover:bg-white overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[122.131px] bg-[#FFB74A] rounded-[40px]" />
          </div>
          <div className="flex items-center justify-between text-[18px] text-[#525252]">
            <p>$1,800,000</p>
            <p>+8%</p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="rounded-[10px] outline-none focus:bg-gray-100 p-[10px] hover:bg-gray-100 group"
        >
          <p
            className={`${
              isDarkMode
                ? "text-white group-focus:text-black group-hover:text-black"
                : "text-[#22242C]"
            } text-[18px] font-[600] text-[#22242C]`}
          >
            XStore
          </p>
          <div className="mt-[17px] mb-[16px] relative w-full h-[12px] rounded-[40px] bg-[#F5F5F5] group-focus:bg-white group-hover:bg-white overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[122.131px] bg-[#FF4A55] rounded-[40px]" />
          </div>
          <div className="flex items-center justify-between text-[18px] text-[#525252]">
            <p>$1,800,000</p>
            <p>+8%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
