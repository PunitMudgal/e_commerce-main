import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { UseProductContext } from "../context/ProductContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UseAuthProvider } from "../context/AuthContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
import { useCartContext } from "../context/CartContext";
function Cart() {
  const { Notification } = UseProductContext();
  const { cartProducts, increaseQuantity, decreaseQuantity } = useCartContext();
  const { user } = UseAuthProvider();

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

  return (
    <div className="w-full p-5 md:p-0">
      <h1 className="text-4xl text-rose-600 font-extrabold font-text1 text-center md:text-xl">
        CART ITEMS
      </h1>
      <Link
        to="/e_commerce-main"
        className="flex items-center font-text1 font-semibold px-8 md:px-3 "
      >
        <HiOutlineArrowNarrowLeft /> Back To Products
      </Link>
      <div className="flex justify-center items-center flex-col gap-4 font-text3 px-24 py-14 lg:px-14 lg:py-11 md:px-3 md:py-2 md:gap-2">
        {" "}
        {cartProducts.length >= 1 ? (
          cartProducts.map((items) => (
            <div
              key={items.id}
              className="box-shadow flex justify-start rounded-lg bg-white border border-gray-200 p-2 font-text3 hover:bg-blue-100 w-[65%] hover:shadow-xl md:w-[95vw] md:p-[1px] md:text-xs"
            >
              <Link
                to={`/singleProduct/${items.id}`}
                className="self-start float-left p-3 rounded-md md:p-1 "
              >
                <LazyLoad>
                  <img
                    className="h-32 w-52 rounded-md object-cover md:w-40 md:h-24"
                    src={items.image}
                    alt={(items.title || items.name).slice(0, 20) + ".."}
                  />
                </LazyLoad>
              </Link>
              <div className="flex justify-between md:text-xs">
                <div className="flex flex-col p-2 justify-evenly md:p-1">
                  <p className="text-orange-600 font-bold  md:text-xs">
                    Price: ${priceCalc(items.price)}
                  </p>
                  <p className="text-xl font-bold font-text1 uppercase md:text-xs">
                    {(items.title || items.name).slice(0, 40) + "..."}
                  </p>

                  <button
                    onClick={() => deleteItemFromCart(items.id)}
                    className="bg-rose-600 text-white font-bold p-1 rounded-sm  md:text-xs"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex gap-3 items-center self-center justify-between ml-20 md:gap-1 md:text-xs">
                  <AiOutlineMinus
                    onClick={() => decreaseQuantity(items.id)}
                    size={35}
                    className="bg-gray-300 rounded-md p-1 cursor-pointer "
                  />
                  <p className=" flex flex-wrap text-lg font-text2 md:text-xs">
                    {items.quantity}
                  </p>
                  <AiOutlinePlus
                    onClick={() => increaseQuantity(items.id)}
                    size={35}
                    className="bg-gray-300 rounded-md p-1 cursor-pointer md:p-[2px]"
                  />
                  <p className="self-end font-text2 font-bold text-orange-500 md:text-xs">
                    Total: ${priceCalc(items.price) * items.quantity}
                  </p>
                </div>
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
  );
}

export default Cart;
