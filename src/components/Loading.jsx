import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Loading() {
  return (
    <>
      <SkeletonTheme
        baseColor="#F2F4F4"
        highlightColor="#CCD1D1"
        enableAnimation
        direction="ltr"
      >
        <div className="flex justify-around gap-2 p-10 md:p-2">
          <div className="flex flex-col gap-2 md:gap-1">
            <Skeleton height={30} width={120} className="mb-5" />
            <Skeleton count={7} height={20} width={100} enableAnimation />
          </div>
          <div className="flex flex-col justify-evenly">
            <Skeleton height={90} width={850} />
            <div className="grid grid-cols-3 mt-3">
              <Skeleton height={250} width={230} enableAnimation />
              <Skeleton height={250} width={230} enableAnimation />
              <Skeleton height={250} width={230} enableAnimation />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}

export default Loading;
