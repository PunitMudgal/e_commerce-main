import React from "react";
import Product from "../components/Product";
import { FaThLarge, FaStream } from "react-icons/fa";
import { UseProductContext } from "../context/ProductContext";
import Loading from "../components/Loading";
import Sorting from "../components/Sorting";
import Search from "../components/Search";
import Error from "../components/Error";
import Categories from "../components/Categories";

function Main() {
  const { products, isLoading, isError,filterProduct } = UseProductContext();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-10 md:p-4 bg-gray-50">
          <div className="flex justify-evenly md:flex-col">
            <div className=""><Categories/></div>
            <div>
              <div className="flex justify-around items-center md:flex-col gap-2 mb-6">
                <div className="flex gap-4 md:hidden">
                  <FaThLarge size={30} />
                  <FaStream size={30} />
                  {!isLoading && (
                    <p className="font-text1 font-bold text-green-600">
                      {filterProduct.length} Products Found
                    </p>
                  )}
                </div>
                <Search />
                <Sorting />
              </div>
              {isError ? (
                <Error />
              ) : (
                <div className="grid grid-cols-3 gap-4 md:gap-1 md:grid-cols-2">
                  {filterProduct.map((product) => (
                    <Product key={product.id} {...product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
