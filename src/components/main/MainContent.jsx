import React from "react";
import Charts from "./Charts";
import Header from "./Header";
import Orders from "./Orders";
import Platforms from "./Platforms";
import SalesTrends from "./SalesTrends";

const MainContent = () => {
  return (
    <div className="h-fit flex-1">
      <Header />
      <div className="p-[20px]">
        <div className="flex justify-between gap-[20px]">
          <SalesTrends />
          <Charts />
        </div>
        <div className=" mt-[20px] flex justify-between gap-[20px]">
          <Orders />
          <Platforms />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
