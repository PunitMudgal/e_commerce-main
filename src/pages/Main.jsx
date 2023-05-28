import React from "react";
import Product from "../components/Product";
import { FaThLarge, FaStream, FaSearch } from "react-icons/fa";
import {UseProductContext} from '../context/ProductContext';

function Main() {
  const {products, gadgets} = UseProductContext();
  
  return (
    <div className="p-10 md:p-4">
      <div className="flex justify-evenly md:flex-col">
        <div className="">Categories</div>
        <div className="">
          <div className="flex justify-around items-center mb-6">
            <div className="flex gap-4 md:hidden">
              <FaThLarge size={30} />
              <FaStream size={30} />
              <p>15 Product Found</p>
            </div>
            <div className="flex border p-2 gap-1 border-slate-900 rounded-md">
              <FaSearch size={22} />
              <input
                className="border-none outline-none"
                type="text"
                placeholder="Search Product.."
              />
            </div>
            <div className="flex items-center">
              <p>Sort By:</p>
              <select name="sort" id="sort">
                <option value="">Latest</option>
                <option value="">Oldest</option>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-1 md:grid-cols-2"> 
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
