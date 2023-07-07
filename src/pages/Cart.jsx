import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { UseProductContext } from "../context/ProductContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UseAuthProvider } from "../context/AuthContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
function Cart() {
  const { cartProducts, Notification, increaseQuantity, decreaseQuantity } = UseProductContext();
  const { user } = UseAuthProvider();
  // const [quantity, setQuantity] = useState(1);
  console.log("cart products", cartProducts);

  const deleteItemFromCart = async (itemId) => {
    try {
      Notification("Item Removed", "success");
      const result = await cartProducts.filter((item) => item.id !== itemId);
      // console.log("result", result);
      await updateDoc(doc(db, "users", `${user.email}`), {
        savedItems: result,
      });
    } catch (error) {
      Notification(error.message, "Failed");
      console.log(error);
    }
  };

  const priceCalc = (price) => {
    if (price > 1200) {
      return Math.round(price / 100);
    } else {
      return price;
    }
  };

  // console.log("price", price);
  return (
    <div className="w-full">
      <div className="p-5">
        <h1 className="text-4xl text-rose-600 font-extrabold font-text1 text-center md:text-2xl">
          CART ITEMS
        </h1>
        <Link
          to="/"
          className="flex  items-center font-text1 font-semibold px-8"
        >
          <HiOutlineArrowNarrowLeft /> Back To Products
        </Link>
        <div className="flex justify-center items-center flex-col gap-4 px-24 py-14 lg:px-14 lg:py-11 md:p-3">
          {" "}
          {cartProducts.length >= 1 ? (
            cartProducts.map((items) => (
              <div
                key={items.id}
                className="box-shadow flex rounded-lg bg-white border border-gray-200 p-2 font-text-3 hover:bg-blue-100 w-[70%] hover:shadow-xl"
              >
                <Link
                  to={`/singleProduct/${items.id}`}
                  className="self-start float-left p-3 rounded-md"
                >
                  <LazyLoad>
                    <img
                      className="h-auto w-[25vw] rounded-md object-cover md:w-14vw "
                      src={items.image}
                      alt={items.title || items.name}
                    />
                  </LazyLoad>
                </Link>
                <div className="flex flex-col p-2 justify-around ">
                  <p className="text-orange-600">${priceCalc(items.price)}</p>
                  <p className="text-xl font-bold font-text1 uppercase">
                    {items.title || items.name}
                  </p>

                  <button
                    onClick={() => deleteItemFromCart(items.id)}
                    className="bg-rose-600 text-white font-bold p-1 rounded-md "
                  >
                    Remove Item
                  </button>
                </div>
                <div className="flex flex-col justify-center gap-5 items-end">
                  <div className="flex gap-3 items-center self-center ml-20">
                    <AiOutlineMinus
                      onClick={() => decreaseQuantity(items.id)}
                      size={35}
                      className="bg-gray-300 rounded-md p-1 cursor-pointer "
                    />
                    <p className=" flex flex-wrap text-lg font-text2">{items.quantity}</p>
                    <AiOutlinePlus
                      onClick={() => increaseQuantity(items.id)}
                      size={35}
                      className="bg-gray-300 rounded-md p-1 cursor-pointer "
                    />
                  </div>
                  <p className="self-end font-text2 font-bold text-orange-500">
                    Total: ${priceCalc(items.price) * items.quantity}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-text3 text-xl text-rose-700">
              ~Cart Empty~
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
