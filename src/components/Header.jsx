import React, { useState } from "react";
import { FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { UseAuthProvider } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { IoExitOutline } from "react-icons/io5";
import avatar from "../assets/user.jpg";


function Header() {
  const { googleSignIn, user, logOut } = UseAuthProvider();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setDoc(doc(db, "users", user.displayName), {
        savedItems: [],
      });
    } catch (error) {
      console.log(error);
      alert("error detected!");
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
      alert("error detected!");
    }
  };

  return (
    <div className="w-full p-8 md:p-5 md:text-md text-lg bg-blue-950 text-white font-text1 sticky top-0 z-10">
      <div className="justify-evenly items-center flex md:hidden">
        <Link to="/" className="text-2xl">
          e<span className="text-orange-500">Shop</span>.
        </Link>
        <div className="flex items-center gap-2">
          <a href="/">Home</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="flex items-center gap-4 relative p-1">
         {user && <span className="text-purple-400 "><small className="text-white">Welcome</small> {user.displayName}</span>}
          <img className="h-8 rounded-full object-contain" src={user?.email ? user?.photoURL : avatar} alt="not" />{" "}
          <FaShoppingCart className=" cursor-pointer" size={25} />
          {user && <p className="absolute px-1 text-sm max-w-max top-0 right-9 rounded-full bg-red-600">1</p>}
          {user ? (
            <IoExitOutline className="text-red-500" size={25} onClick={handleLogOut} />
          ) : (
            <button className="bg-rose-600 px-2 rounded-md font-bold" onClick={handleGoogleSignIn}>Login</button>
          )}

          <p className="hidden absolute top-8 right-3 bg-rose-800 rounded px-1">Logout</p>
        </div>
      </div>

      {/* mobile view  */}
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
            <a href="/contact">Contact Us</a>
            <span>UserName</span>
            <a href="/">My Cart</a>
            {user ? (
              <IoExitOutline onClick={handleLogOut} />
            ) : (
              <button onClick={handleGoogleSignIn}>Login</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
