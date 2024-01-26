import React, { useEffect, useRef } from "react";

const Trendbar = ({ period, value, val2 }) => {
  const barRef = useRef();

  useEffect(() => {
    barRef.current.style.height = value + "px";
  }, []);

  return (
    <div
      tabIndex={1}
      className="relative flex flex-col justify-end h-fit outline-none group"
    >
      <div className="amount-bg absolute top-[-28px] left-[50%] translate-x-[-50%] hidden group-focus:block group-hover:block">
        <p className="p-[5px] text-white text-[12px] font-[500] font-Inter">
          ${val2}
        </p>
      </div>

      <div
        ref={barRef}
        className="w-[30px] h-[10px] bg-[#34CAA51A] bg-opacity-10 rounded-tl-[20px] rounded-tr-[20px] hover:bg-gradient-to-b outline-none group-focus:bg-gradient-to-b from-[#34CAA5] to-[#34CAA500] cursor-pointer duration-300"
      />
      <p className="mt-[12px] text-[14px] font-semibold text-[#525252]">
        {period}
      </p>
    </div>
  );
};

export default Trendbar;
