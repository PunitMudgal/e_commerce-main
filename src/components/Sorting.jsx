import React from "react";

function Sorting() {
  return (
    <div className="flex items-center">
      <p className="font-text1 font-bold text-orange-600">Sort By:</p>
      <select className="font-text1 font-bold bg-transparent border" name="sort" id="sort">
        <option className="font-bold text-white bg-blue-500" value="">
          Latest
        </option>
        <option className="font-bold text-white bg-blue-500" value="">
         Lowest Price
        </option>     
        <option className="font-bold text-white bg-blue-500" value="">
         Highest Price
        </option>
        <option className="font-bold  text-white bg-blue-500 " value="">
          A-Z
        </option>
        <option className="font-bold  text-white bg-blue-500 " value="">
          Z-A
        </option>
      </select>
    </div>
  );
}

export default Sorting;
