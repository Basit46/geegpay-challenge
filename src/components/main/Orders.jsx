import React from "react";
import Order from "../mini/Order";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import { useTheme } from "../../context/ThemeContext";

const ordersData = [
  {
    img: img1,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    isPaid: true,
  },
  {
    img: img2,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    isPaid: false,
  },
  {
    img: img3,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    isPaid: true,
  },
  {
    img: img4,
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    isPaid: false,
  },
  {
    img: img5,
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    isPaid: true,
  },
];

const Orders = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "bg-transparent" : "bg-[white]"
      } w-full xl:w-[60%] h-[422px] rounded-[14px] border border-[#EDF2F7] px-[20px] pt-[18px]`}
    >
      <div className="flex justify-between items-center">
        <p
          className={`${
            isDarkMode ? "text-white" : "text-[#26282C]"
          } text-[18px] font-semibold`}
        >
          Last Orders
        </p>
        <p
          tabIndex={1}
          className="text-[#34CAA5] text-[18px] font-medium outline-none focus:text-[red] focus:underline"
        >
          See All
        </p>
      </div>

      <table className="mt-[14px] w-full">
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Date</th>
            <th align="left">Amount</th>
            <th align="left">State</th>
            <th align="left">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <Order key={index} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
