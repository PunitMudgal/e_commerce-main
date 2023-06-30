import React from "react";
import { UseFilterContext } from "../context/FilterContext";

function Categories() {
  const {
    categoriesProducts,
    ClearFilter,
    getSortingValues,
    filter: { minPrice, price, maxPrice },
  } = UseFilterContext();

  return (
    <div className="flex flex-col gap-3 items-start font-text3 md:items-center">
      <h2 className="text-2xl font-text2 font-bold text-[#3498DB] uppercase">
        Categories
      </h2>
      <div className="flex flex-col items-start text-slate-800 gap-1 font-semibold md:items-center md:flex-row md:flex-wrap md:gap-4 md:justify-evenly">
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

        <label
          htmlFor="minmax-range"
          className="block mb-2 text-sm font-medium text-orange-500 "
        >
          {price}
        </label>
        <input
          id="minmax-range"
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={getSortingValues}
          className="w-full h-2 bg-slate-500 rounded-lg appearance-none cursor-pointer "
        />
      </div>
      <button
        onClick={ClearFilter}
        className="rounded-md font-bold font-text1 px-2 py-1 text-white bg-[#E74C3C] hover:bg-[#C62828] md:mb-2"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default Categories;
