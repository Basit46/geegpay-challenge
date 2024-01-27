import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Trendbar from "../mini/Trendbar";
import Trendline from "../mini/Trendline";

const SalesTrends = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "bg-transparent" : "bg-white"
      } w-[100%] xl:w-[60%] h-[374px] rounded-[14px] border border-[#EDF2F7] p-[10px] vsm:px-[20px] vsm:pt-[21.5px]`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] font-semibold">Sales Trends</h1>
        <div className="flex items-center gap-[10px]">
          <p className="text-[14px] font-medium">Short by:</p>
          <span
            tabIndex={1}
            className={`flex gap-[10px] items-center rounded-[20px] group border border-[#E1DFDF] py-[6px] px-[12px]`}
          >
            <p className="text-[12px]">Weekly</p>
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

        <div className="absolute bottom-[-25px] vsm:bottom-[-42px] imd:bottom-[-25px] left-0 w-full h-[50px] flex items-end gap-[24px]">
          <div className="w-[46px] text-[12px] font-semibold text-[#525252]"></div>
          <div className="bar-scroll flex-1 w-full overflow-x-auto px-[10px] xmd:px-0">
            <div className="min-w-[500px] flex items-end justify-between">
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
    </div>
  );
};

export default SalesTrends;
