import React from "react";
import { UseProductContext } from "../context/ProductContext";

function Categories() {
  const { categoriesProducts, ClearFilter } = UseProductContext();
  
  return (
    <div className="flex flex-col gap-3 items-start md:items-center font-text3">
      <h2 className="text-2xl font-text2 font-bold text-pink-700">
        Categories
      </h2>
      <div className="flex flex-col items-start md:items-center text-slate-800 gap-1 font-semibold ">
        <button onClick={ClearFilter} className="border-b-2 border-gray-400">
          All
        </button>
        <button
          onClick={() => categoriesProducts("laptop")}
          className="border-b-2 border-gray-400"
        >
          Laptop
        </button>
        <button
          onClick={() => categoriesProducts("electronics")}
          className="border-b-2 border-gray-400"
        >
          Electronics
        </button>
        <button
          onClick={() => categoriesProducts("watch")}
          className="border-b-2 border-gray-400"
        >
          Watch
        </button>
        <button
          onClick={() => categoriesProducts("men's clothing")}
          className="border-b-2 border-gray-400"
        >
          Men's Fashion
        </button>
        <button
          onClick={() => categoriesProducts("women's clothing")}
          className="border-b-2 border-gray-400"
        >
          Women's Fashion
        </button>
        <button
          onClick={() => categoriesProducts("mobile")}
          className="border-b-2 border-gray-400"
        >
          Phone
        </button>
        <button
          onClick={() => categoriesProducts("jewelery")}
          className="border-b-2 border-gray-400"
        >
          Jewelery
        </button>
      </div>
      <div>
        <h4 className="font-semibold text-lg text-green-900">Price</h4>
        <p>todo</p>
        {/* slider  */}
      </div>
      <button
        onClick={ClearFilter}
        className="rounded-sm px-2 py-1 font-text1 text-white bg-orange-600"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default Categories;
