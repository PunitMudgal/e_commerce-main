import React, { useState } from "react";
import { FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full p-8 md:p-5 md:text-md text-lg bg-blue-950 text-white font-text1 sticky top-0 z-10">
      <div className="justify-evenly items-center flex md:hidden">
        <p className="text-2xl">
          e<span className="text-orange-500">Shop</span>.
        </p>
        <div className="flex items-center gap-2">
          <a href="/">Home</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="" alt="not" />
          <span>UserName</span>
          <a href="/">My Orders</a>
          <a href="/">Login</a>
          <FaShoppingCart className=" cursor-pointer" size={24} />
        </div>
      </div>

      <div className="hidden md:flex justify-around items-center">
        <p className="text-2xl ">
          e<span className="text-orange-500">Shop</span>.
        </p>
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
          <div className="absolute flex flex-col top-0 left-0 h-[100%] w-full bg-slate-800 justify-center items-center font-text2 gap-6">
            <GrClose
              className="absolute top-5 right-5 "
              size={22}
              color="#fff"
              onClick={() => setToggleMenu(false)}
            />
            <a href="/">Home</a>
            <a href="/">Contact Us</a>
            <span>UserName</span>
            <a href="/">My Orders</a>
            <a href="/">Login</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
