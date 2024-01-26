import React from "react";

const Trendline = ({ value }) => {
  return (
    <span className="relative flex gap-[24px] items-center">
      <p className="w-[46px] text-[12px] font-semibold text-[#525252]">
        {value}
      </p>
      <div className="flex-1 h-[0px] border-t border-dashed border-[#EAEAEA]" />
    </span>
  );
};

export default Trendline;
