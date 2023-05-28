import React from "react";

function Product({ title, name, price, image }) {
  return (
    <>
      <div className="bg-slate-100 flex flex-col w-72 md:w-40 p-2 box-shadow gap-2 font-text1">
        <div className="h-full w-full flex justify-center items-center">
          <img className="object-cover h-52 md:h-36" src={image} alt="laptop" />
        </div>
        <hr />
        <p className="text-orange-600">${price > 1200 ? price / 100 : price}</p>
        <p>{title || name}</p>
        <button className="rounded-sm bg-orange-600 text-center text-white">
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Product;
