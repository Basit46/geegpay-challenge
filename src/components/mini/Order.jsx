import React from "react";
import { DocumentDownload } from "iconsax-react";
import { useTheme } from "../../context/ThemeContext";

const Order = ({ order }) => {
  const { isDarkMode } = useTheme();
  return (
    <tr
      tabIndex={0}
      className="border-t border-[#EDF2F6] group focus:bg-gray-100 hover:bg-gray-100 outline-none"
    >
      <td
        align="left"
        className=" pt-[12px] pb-[16px] flex items-center gap-[10px]"
      >
        <img
          className="h-[32px] w-[32px]"
          src={order.img}
          alt="Order placer Image"
        />
        <p
          className={`${
            isDarkMode
              ? "text-white group-hover:text-black group-focus:text-[#3A3F51]"
              : "text-[#3A3F51]"
          } font-medium`}
        >
          {order.name}
        </p>
      </td>
      <td align="left" className="text-[#737373]">
        {order.date}
      </td>
      <td
        align="left"
        className={`${
          isDarkMode ? "text-[#6f64a3]" : "text-[#0D062D]"
        } font-medium`}
      >
        {order.amount}
      </td>
      <td
        align="left"
        className={`${order.isPaid ? "text-[#34CAA5]" : "text-[#ED544E]"}`}
      >
        {order.isPaid ? "Paid" : "Refund"}
      </td>
      <td
        align="left"
        className="flex gap-[4px] items-center outline-none group focus:border-b w-fit group-focus:border-b-[red]"
      >
        <DocumentDownload
          size={16}
          className="group-focus:text-[red] group-hover:text-[red]"
        />
        <p
          className={`${
            isDarkMode ? "text-[#6f64a3]" : "text-[#0D062D]"
          } font-[14px] leading-none group-focus:text-[red]`}
        >
          View
        </p>
      </td>
    </tr>
  );
};

export default Order;
