//!       this is grid view of the home products

import React from "react";
import { Link } from "react-router-dom";
import { UseProductContext } from "../context/ProductContext";
import LazyLoad from "react-lazy-load";

function Product({ title, name, price, image, id }) {
  const { HandleAddToCart } = UseProductContext();

  return (
    <>
      <div className="bg-white flex flex-col w-72 md:w-40 p-2 box-shadow gap-2 font-text1 rounded-lg hover:bg-blue-100">
        <Link
          to={`/singleProduct/${id}`}
          className="h-full w-full bg-white flex justify-center items-center"
        >
          <img
            className="object-cover rounded-md h-52 md:h-36"
            src={image}
            alt={title || name}
          />
        </Link>
        <hr />
        <p className="text-orange-600">${price > 1200 ? price / 100 : price}</p>
        <p className="font-bold uppercase font-text2">{title || name}</p>
        <button
          className="rounded-sm bg-[#16A085] text-center text-white"
          onClick={() => HandleAddToCart(id, title, name, image, price)}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Product;
