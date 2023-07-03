import React, { useState } from "react";
import { FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthProvider } from "../context/AuthContext";
import { IoExitOutline } from "react-icons/io5";
import { UseProductContext } from "../context/ProductContext";

function Header() {
  const { user, logOut } = UseAuthProvider();
  const { cartProducts, isLoading, Notification } = UseProductContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const Navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      Notification("logout successful", "success");
    } catch (error) {
      console.log(error);
      Notification(error.message, "failed");
    }
  };

  return (
    <div className="w-full p-8 md:p-5 md:text-md text-lg bg-blue-950 text-white font-text1 sticky top-0 z-20">
      <div className="justify-evenly items-center flex md:hidden">
        <Link to="/" className="text-2xl">
          e<span className="text-orange-500">Shop</span>.
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="flex items-center gap-4 relative p-1">
          <FaShoppingCart
            onClick={() => Navigate("/cart")}
            className=" cursor-pointer"
            size={25}
          />
          {user && (
            <p className="absolute px-1 text-sm max-w-max top-0 right-[7.3rem] rounded-full bg-red-600">
              {cartProducts.length >= 1 ? cartProducts.length : 0}
            </p>
          )}
          {user ? (
            <IoExitOutline
              className="text-red-500 cursor-pointer"
              size={25}
              onClick={handleLogOut}
            />
          ) : (
            <Link
              to="/signup"
              className="bg-rose-600 px-2 rounded-md font-bold"
            >
              Signup
            </Link>
          )}
          <Link to="/login" className="bg-sky-600 px-2 rounded-md font-bold">
            Login
          </Link>
        </div>
      </div>

      {/* mobile view  */}
      <div className="hidden md:flex justify-around items-center">
        <Link to="/" className="text-2xl ">
          e<span className="text-orange-500">Shop</span>.
        </Link>
        <div className="flex gap-2">
          {/*todo <img src="" alt="" /> */}
          <FaShoppingCart size={22} />
          <FaEllipsisV
            size={22}
            color="#fff"
            onClick={() => setToggleMenu(true)}
          />
        </div>
        {/*  */}
        {toggleMenu && (
          <div className="absolute flex flex-col top-0 left-0 h-screen w-full bg-slate-800 justify-center items-center font-text3 gap-6">
            <GrClose
              className="absolute top-5 right-5 text-white"
              size={22}
              color="#FDFEFE"
              onClick={() => setToggleMenu(false)}
            />
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <span>UserName</span>
            <Link to="/cart">My Cart</Link>
            {user ? (
              <IoExitOutline onClick={handleLogOut} />
            ) : (
              <Link to="/signup">Signup</Link>
            )}
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
