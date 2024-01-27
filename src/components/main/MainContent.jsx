import React from "react";
import Charts from "./Charts";
import Header from "./Header";
import Orders from "./Orders";
import Platforms from "./Platforms";
import SalesTrends from "./SalesTrends";

const MainContent = ({ isOpen, setIsOpen }) => {
  return (
    <div className="h-fit flex-1">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="p-[20px]">
        <div className="flex flex-col xl:flex-row justify-between gap-[20px]">
          <SalesTrends />
          <Charts />
        </div>
        <div className="mt-[20px] flex flex-col xl:flex-row justify-between gap-[20px]">
          <Orders />
          <Platforms />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
