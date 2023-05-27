import React from "react";
import bgImage from "../assets/fashion-blue-bg.jpg";
import bgImage2 from "../assets/fashion-purple-bg.jpg";
import bgImage3 from "../assets/fashion-white-bg2.jpg";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Home() {
  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const sliderLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div className="h-[88vh] md:h-[70vh] select-none bg-gray-500 w-full">
      <FaAngleLeft
        onClick={sliderLeft}
        color="#fff"
        className="absolute top-[50%] left-2 bg-slate-900 opacity-50 z-10 rounded-full"
        size={30}
      />
      <FaAngleRight
        onClick={sliderRight}
        color="#fff"
        className="absolute top-[50%] right-2 bg-slate-900 opacity-50 z-10 rounded-full"
        size={30}
      />

      <div className="h-full min-w-[100vw] relative">
        <div
          id="slider"
          className="h-full w-[100vw] flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          <img
            className="object-cover h-full w-[100vw]"
            src={bgImage}
            alt="bgImg"
          />
          <img
            className="object-cover h-full w-[100vw]"
            src={bgImage2}
            alt="bgImg2"
          />
          <img
            className="object-cover h-full w-[100vw]"
            src={bgImage3}
            alt="bgImg3"
          />
        </div>
        <div className="absolute top-[28%] left-[35%] md:left-6 bg-slate-800 p-12 pl-20 pr-20 md:pr-8 md:pl-8 md:p-4 text-white flex flex-col gap-2 text-center rounded-xl opacity-70 font-text3">
          <h3 className="font-text1 text-4xl md:text-2xl">
            Men & Women's Fashion
          </h3>
          <p>Up to 30% off on all onsale Products</p>
          <hr />
          <a className="bg-orange-500 rounded-md p-2" href="/">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
