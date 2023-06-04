import React from "react";

function ListView({ title, name, price, image, description }) {
  const CutTheLength = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="shadow-lg flex rounded-lg bg-white border border-gray-200 p-2 font-text-3 hover:bg-blue-100">
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
        <button className="bg-orange-500 text-white font-bold  px-1 rounded-md py-2 ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ListView;
