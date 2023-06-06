import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { UseProductContext } from "../context/ProductContext";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Loading from "../components/Loading";
import Error from "../components/Error";

function SingleProduct() {
  const api1 = "https://fakestoreapi.com/products";
  const api2 = "https://api.pujakaitem.com/api/products";
  const { getSingleData, singleProduct, isSingleError, isSingleLoading } =
    UseProductContext();
  const { id } = useParams();

  useEffect(() => {
    if (Number(id) <= 20 && Number(id) >= 1) {
      getSingleData(`${api1}/${id}`);
    } else {
      getSingleData(`${api2}?id=${id}`);
    }
  }, [id]);
  return (
    <div className="bg-gray-100">
      <h1 className="uppercase px-8 py-3 font-text3 font-bold text-gray-800 text-2xl md:text-xl">
        Product Details
      </h1>
      <Link
        to="/#products"
        className="flex  items-center font-text1 font-semibold px-8"
      >
        <HiOutlineArrowNarrowLeft /> Back To Products
      </Link>

      {isSingleLoading ? (
        <Loading />
      ) : (
        <div className="flex md:flex-col gap-6 p-8 md:p-2 mx-40 font-text3">
          {" "}
          {isSingleError ? (
            <Error />
          ) : (
            <>
              {" "}
              <div className="flex justify-center items-center bg-white border rounded-md border-gray-600 w-[30rem] h-[30rem]">
                {singleProduct.name ? (
                  <img
                    className="object-cover  rounded-lg w-[25rem] h-[25rem] "
                    src={singleProduct.image[0].url}
                    alt={singleProduct.name}
                  />
                ) : (
                  <img
                    className="object-contain rounded-lg w-[25rem] h-[25rem] "
                    src={singleProduct.image}
                    alt={singleProduct.title}
                  />
                )}
              </div>
              <div className="flex flex-col flex-1 justify-around">
                <div className="flex flex-col gap-3 md:gap-1">
                  {" "}
                  <p className="font-text2 font-bold text-xl uppercase">
                    {singleProduct.name || singleProduct.title}
                  </p>
                  <p className="text-sm text- capitalize">
                    <b>Brand:</b> {singleProduct?.company || "N/A"}
                  </p>
                  <p className="text-[#E74C3C] text-xl font-semibold">
                    ${" "}
                    {singleProduct.price > 1200
                      ? singleProduct.price / 100
                      : singleProduct.price}
                    /- only
                  </p>
                </div>
                <p>
                  <b>Rating:</b>{" "}
                  {singleProduct.stars || singleProduct.rating.rate}
                  /5
                </p>
                <p>
                  <b>Review By:</b>{" "}
                  {singleProduct.reviews || singleProduct.rating.count}
                </p>
                <p className="font-text1 text-slate-600 text-lg md:text-md">
                  {singleProduct.description}
                </p>
                <button className="rounded-md p-2 md:p-1 font-bold text-white bg-[#F39C12] hover:bg-[#CA6F1E]">
                  Add To Cart
                </button>
              </div>{" "}
            </>
          )}
        </div>
      )}

      <div>
        <h2 className="uppercase px-8 py-3 font-bold font-text3 text-2xl text-gray-800 md:text-xl">
          Reviews & Ratings
        </h2>
      </div>
    </div>
  );
}

export default SingleProduct;
