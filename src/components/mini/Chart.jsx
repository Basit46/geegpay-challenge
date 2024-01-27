import React from "react";
import positivechart from "../../assets/poschart.svg";
import positivearrow from "../../assets/posarrow.svg";
import negativechart from "../../assets/negchart.svg";
import negativearrow from "../../assets/negarrow.svg";
import { useTheme } from "../../context/ThemeContext";

const Chart = ({ details }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      tabIndex={0}
      className={`${
        isDarkMode ? "bg-transparent" : "bg-white"
      } w-full sm:w-[48%] h-[220px] xl:h-[48%] flex flex-col justify-between xl:block outline-none focus:bg-gray-100 hover:bg-gray-100 cursor-pointer focus:border-black/10 hover:border-black/10 p-[16px] rounded-[14px] border border-[#EDF2F7]`}
    >
      <div className="flex justify-between items-center">
        <div className="w-[40px] h-[40px] border-[0.714px] border-[#E6E6E6] rounded-full grid place-items-center">
          <img src={details?.icon} alt="Icon" />
        </div>
        <img
          src={details.isPositive ? positivechart : negativechart}
          alt="Chart"
        />
      </div>
      <p className="mt-[18px] mb-[5px] text-[18px] text-[#898989] font-medium">
        {details?.title}
      </p>
      <p className="text-[24px] text-[#3A3F51] font-semibold">
        {details?.value}
      </p>
      <div className="flex justify-between items-center">
        <div
          className={`${
            details.isPositive
              ? "bg-[#0F7C681F] text-[#0F7C68]"
              : "bg-[#731A181F] text-[#db4542]"
          } flex items-center gap-[4px] px-[8px] py-[4px] rounded-[1000px]  text-[12px] font-medium`}
        >
          <img
            src={details.isPositive ? positivearrow : negativearrow}
            alt="arrow"
          />{" "}
          23,5%
        </div>
        <p className="text-[14px] font-Inter text-[#606060] whitespace-nowrap">
          vs. previous month
        </p>
      </div>
    </div>
  );
};

export default Chart;
