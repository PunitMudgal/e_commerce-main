import React, { useState, useRef } from "react";
import { FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthProvider } from "../context/AuthContext";
import { IoExitOutline } from "react-icons/io5";
import { UseProductContext } from "../context/ProductContext";
import profilePhoto from "../assets/user.jpg";
import { HiOutlinePlus } from "react-icons/hi";

function Header() {
  const { user, logOut } = UseAuthProvider();
  const { cartProducts, Notification, isLoading } = UseProductContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const Navigate = useNavigate();

  const tooltip = useRef(null);
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
          {/* {user?.email? (
            <p className="absolute px-1 text-sm max-w-max top-0 right-[10.4rem] rounded-full bg-red-600">
              {cartProducts.length}
            </p>
          ): 0} */}
          {user ? (
            <>
              <IoExitOutline
                className="text-red-500 cursor-pointer"
                size={25}
                onClick={handleLogOut}
                onMouseOver={() => (tooltip.current.style.display = "flex")}
                onMouseOut={() => (tooltip.current.style.display = "none")}
              />
              <p
                ref={tooltip}
                className="absolute hidden top-[2.2rem] right-[6rem] rounded-md bg-white text-gray-700 p-1 text-sm "
              >
                Logout
              </p>
            </>
          ) : (
            <Link
              to="/signup"
              className="bg-rose-600 px-2 rounded-md font-bold"
            >
              Signup
            </Link>
          )}
          <img
            src={profilePhoto}
            alt="avatar"
            onClick={() => setToggleMenu(true)}
            className="h-9 rounded-full border"
          />
          {/* user info card  */}
          {toggleMenu && (
            <div
              onMouseLeave={() => setToggleMenu(false)}
              className="flex min-w-max flex-col justify-center absolute bg-purple-100 rounded-md top-[2.5rem] p-5 box-shadow border-2 border-rose-600"
            >
              <h4 className="text-center font-text1 text-rose-500 font-bold">
                Personal Info
              </h4>
              <img
                src={user?.photoURL || profilePhoto}
                alt="avatar"
                className="p-[2px] rounded-full h-52 w-52 self-center border-2 border-rose-400 box-shadow2"
              />
              <HiOutlinePlus
                className="relative inline-block max-w-max bg-slate-600/60 rounded-full bottom-16 left-[11.5rem] text-gray-700 cursor-pointer box-shadow2"
                size={40}
              />
              {user.displayName && (
                <p className="text-gray-600 self-center">
                  {" "}
                  <strong className="font-text2">Email Address:</strong>{" "}
                  {user?.displayName}
                </p>
              )}
              <p className="text-gray-600 self-center">
                {" "}
                <strong className="font-text2">Email Address:</strong>{" "}
                {user.email}
              </p>
            </div>
          )}
          <Link
            to="/login"
            className="bg-cyan-400 hover:bg-cyan-500 px-2 rounded-md font-bold"
          >
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
