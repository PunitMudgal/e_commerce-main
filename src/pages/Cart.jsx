import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { UseProductContext } from "../context/ProductContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UseAuthProvider } from "../context/AuthContext";

function Cart() {
  const { cartProducts} = UseProductContext();
  const {user} = UseAuthProvider()

  const deleteItemFromCart = async (itemId) => {
    try {
      const result = cartProducts.filter((item) => item.id !== itemId);
      console.log('result', result);
      await updateDoc(doc(db, "users", `${user.email}`), {
        savedItems: result,
      });
    } catch (error) {
      // todo error message
      console.log(error);
    }
  };

  console.log("cartid", cartProducts);

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
        <div className="flex flex-wrap gap-4 px-24 py-14 md:p-5">
          {" "}
          {cartProducts.length >= 1 ? (
            cartProducts.map((items) => (
              <div
                key={items.id}
                className="bg-white flex flex-col w-72 md:w-40 p-2 box-shadow gap-2 font-text1 rounded-lg hover:bg-blue-100"
              >
                <Link
                  to={`/singleProduct/${items.id}`}
                  className="h-full w-full bg-white flex justify-center items-center"
                >
                  <img
                    className="object-cover rounded-md h-52 md:h-36"
                    src={items.image}
                    alt={items.title || items.name}
                  />
                </Link>
                <hr />
                <p className="text-orange-600">
                  ${items.price > 1200 ? items.price / 100 : items.price}
                </p>
                <p className="font-bold uppercase font-text2">
                  {items.title || items.name}
                </p>
                <button
                  className="rounded-md bg-red-600 text-center text-white"
                  onClick={() => deleteItemFromCart(items.id)}
                >
                  Remove From Cart
                </button>
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
