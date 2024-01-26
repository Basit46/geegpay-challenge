import React from "react";
import arrow from "../../assets/arrowDown.svg";
import { useTheme } from "../../context/ThemeContext";
import Trendbar from "../mini/Trendbar";
import Trendline from "../mini/Trendline";

const SalesTrends = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "bg-transparent" : "bg-white"
      } w-[60%] h-[374px] rounded-[14px] border border-[#EDF2F7] px-[20px] pt-[21.5px]`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] font-semibold">Sales Trends</h1>
        <div className="flex items-center gap-[10px]">
          <p className="text-[14px] font-medium">Short by:</p>
          <span
            tabIndex={1}
            className={`${
              isDarkMode && "bg-white text-black"
            } flex gap-[10px] items-center rounded-[20px] group border border-[#E1DFDF] py-[6px] px-[12px]`}
          >
            <p className="text-[12px]">Weekly</p>
            <img
              className="w-[20px] h-[20px] group-focus:border group-focus:border-gray-700"
              src={arrow}
              alt="arrow"
            />
          </span>
        </div>
      </div>

      <div className="relative mt-[18.5px] w-full flex flex-col gap-[20px]">
        <Trendline value={"50,000"} />
        <Trendline value={"40,000"} />
        <Trendline value={"30,000"} />
        <Trendline value={"20,000"} />
        <Trendline value={"10,000"} />
        <Trendline value={"5,000"} />
        <Trendline value={"0"} />

        <div className="absolute bottom-[-25px] left-0 w-full h-[50px] flex items-end gap-[24px]">
          <div className="w-[46px] text-[12px] font-semibold text-[#525252]"></div>
          <div className="flex-1 flex items-end justify-between">
            <Trendbar period={"Jan"} value={68} val2="6,000" />
            <Trendbar period={"Feb"} value={120} val2="21,000" />
            <Trendbar period={"Mar"} value={40} val2="5,000" />
            <Trendbar period={"Apr"} value={161} val2="31,000" />
            <Trendbar period={"May"} value={81} val2="11,000" />
            <Trendbar period={"Jun"} value={216} val2="45,000" />
            <Trendbar period={"Jul"} value={81} val2="11,000" />
            <Trendbar period={"Aug"} value={131} val2="22,000" />
            <Trendbar period={"Sep"} value={182} val2="39,000" />
            <Trendbar period={"Oct"} value={51} val2="7,000" />
            <Trendbar period={"Nov"} value={171} val2="32,000" />
            <Trendbar period={"Dec"} value={151} val2="29,000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTrends;
