import React from "react";
import { Link } from "react-router-dom";

function ListView({ title, name, price, image, description, id }) {
  const CutTheLength = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <Link
      to={`/singleProduct/${id}`}
      className="box-shadow flex rounded-lg bg-white border border-gray-200 p-2 font-text-3 hover:bg-blue-100"
    >
      <div className=" p-3 rounded-md">
        <img
          className="h-60 rounded-md object-fill w-[20vw]"
          src={image}
          alt={title || name}
        />
      </div>
      <div className="flex flex-col p-2 justify-around ">
        <p className="text-orange-600">${price > 1200 ? price / 100 : price}</p>
        <p className="text-xl font-bold font-text1 uppercase">
          {CutTheLength(title || name, 40)}
        </p>
        <p className=" flex max-w-md flex-wrap">
          {CutTheLength(description, 260)}
        </p>
        <button className="bg-[#16A085] text-white font-bold  px-1 rounded-md py-2 ">
          Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default ListView;
