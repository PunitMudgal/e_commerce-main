import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthProvider } from "../context/AuthContext";
import SignupPic from "../assets/signup.svg";
import { FaGoogle } from "react-icons/fa";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { SignUpWithEmailPass, SignInWithGoogle } = UseAuthProvider();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await SignUpWithEmailPass(email, password);
      navigate('/')
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    }
  };

  return (
    <div className="p-20 md:p-6 flex justify-center items-center flex-col">
      <h2 className="text-center font-text2 uppercase text-4xl text-orange-500 font-bold">SignUp</h2>
      {error? <p>{error}</p> : null}
      <div className="flex justify-center items-center bg-gray-200 border border-gray-400 p-5 rounded-lg gap-10 md:gap-5">
        <div className="bounce-in-top">
          <img className="w-60 " src={SignupPic} alt="svg not found" />
        </div>
        <div className="flex flex-col bounce-in-bottom">
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col py-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-gray-300 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 bg-gray-300 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="bg-sky-600 py-3 my-6 rounded font-bold text-white">
              Sign Up
            </button>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">Already using Netflix?</span>{" "}
              <Link to="/login">Sign In</Link>
            </p>
          </form>
          <button
            className="flex items-center gap-2 bg-rose-300 p-2 rounded"
            onClick={SignInWithGoogle}
          >
            {" "}
            Sign In With Google <FaGoogle className="text-rose-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
