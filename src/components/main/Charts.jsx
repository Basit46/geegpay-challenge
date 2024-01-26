import React from "react";
import Chart from "../mini/Chart";
import order from "../../assets/order.png";
import refund from "../../assets/refund.png";
import sales from "../../assets/sales.png";
import income from "../../assets/income.png";

const chartsData = [
  {
    icon: order,
    title: "Total Order",
    value: "350",
    isPositive: true,
  },
  {
    icon: refund,
    title: "Total Refund",
    value: "270",
    isPositive: false,
  },
  {
    icon: sales,
    title: "Average Sales",
    value: "1567",
    isPositive: false,
  },
  {
    icon: income,
    title: "Total Income",
    value: "$350.000",
    isPositive: true,
  },
];

const Charts = () => {
  return (
    <div className="flex-1 flex flex-wrap gap-[2%]">
      {chartsData.map((data, index) => (
        <Chart key={index} details={data} />
      ))}
    </div>
  );
};

export default Charts;
