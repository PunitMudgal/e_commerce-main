import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { BiSolidError } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { UseProductContext } from "../context/ProductContext";

function Alert() {
  const { alert } = UseProductContext();
  return (
    <div
      className="items-center justify-center right-2 fixed z-20 box-shadow gap-3 border m-1 border-green-500 bg-white p-3 md:p-2 "
      style={{ display: alert.type === null ? "none" : "flex" }}
    >
      <div>
        {alert.type === "success" ? (
          <GiCheckMark className="text-green-600" size={30} />
        ) : (
          <FiAlertTriangle className="text-red-600" size={30} />
        )}
      </div>

      <p className="text-xl md:text-md font-semibold font-text2 capitalize text-gray-700 md:text-base">
        {alert.message}
      </p>
    </div>
  );
}

export default Alert;
