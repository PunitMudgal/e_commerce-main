import React from "react";
// import Skeleton from 'react-loading-skeleton'
import loading from "../assets/loding.gif";
function Loading() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-transparent">
        <img src={loading} alt="loading_cart" />
      </div>
    </>
  );
}

export default Loading;
