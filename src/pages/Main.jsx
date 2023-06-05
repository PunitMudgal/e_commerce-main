import React from "react";
import Product from "../components/Product";
import { FaThLarge, FaStream } from "react-icons/fa";
import { UseProductContext } from "../context/ProductContext";
import Loading from "../components/Loading";
import Sorting from "../components/Sorting";
import Search from "../components/Search";
import Error from "../components/Error";
import Categories from "../components/Categories";
import ViewType from "../components/ViewType";

function Main() {
  const { isLoading, isError, filterProduct, setGridView, setListView, gridView } = UseProductContext();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-10 md:p-4 bg-gray-50">
          <div className="flex justify-evenly md:flex-col">
            <div className="">
              <Categories />
            </div>
            <div className="">
              <div className="flex  justify-around items-center md:flex-col gap-2 mb-6">
                <div className="flex gap-4 md:hidden">
                  <FaThLarge className={gridView? "active" : ""} onClick={setGridView} size={30} />
                  <FaStream className={!gridView? "active" : ""} onClick={setListView} size={30} />
                  {!isLoading && (
                    <p className="font-text1 font-bold text-green-600">
                      {filterProduct.length} Products Found
                    </p>
                  )}
                </div>
                <Search />
                <Sorting />
              </div>
              {isError ? <Error /> : <ViewType />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
