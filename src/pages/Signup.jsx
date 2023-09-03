import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthProvider } from "../context/AuthContext";
import SignupPic from "../assets/signup.svg";
import { FaGoogle } from "react-icons/fa";
import { UseProductContext } from "../context/ProductContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { SignUpWithEmailPass, SignInWithGoogle } = UseAuthProvider();
  const { Notification } = UseProductContext();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await SignUpWithEmailPass(email, password);
      Notification("Signup Success", "success");
      navigate("/");
    } catch (error) {
      setError(error.message);
      Notification(error.message, "failed");
      console.log("error", error);
    }
  };

  return (
    <div className="p-20 md:p-5 flex justify-center items-center flex-col">
      <h2 className="text-center font-text2 uppercase text-4xl text-orange-500 font-bold">
        SignUp
      </h2>
      {error ? (
        <p className="p-2 bg-rose-300 text-red-600 mb-1 rounded-md font-bold">
          {error}
        </p>
      ) : null}
      <div className="flex justify-center items-center bg-gray-200 border border-gray-400 p-5 rounded-lg gap-10 md:gap-5">
        <div className="bounce-in-top">
          <img className="w-60 " src={SignupPic} alt="svg not found" />
        </div>
        <div className="flex flex-col bounce-in-bottom">
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col py-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-slate-400/60 placeholder:text-gray-600 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 bg-slate-400/60 placeholder:text-gray-600 rounded"
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
              <span className="text-gray-600">Already have an Account?</span>{" "}
              <Link to="/login">Sign In</Link>
            </p>
          </form>
          <button
            className="flex items-center justify-center gap-2 bg-rose-300 p-2 rounded"
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
