import React from "react";
import Skeleton from "react-loading-skeleton";

function Loading() {
  return (
    <>
      <div>
        <Skeleton height={300} />
      </div>
      <div>
        <Skeleton height={300} />
      </div>{" "}
      <div>
        <Skeleton height={300}  />
      </div>
    </>
  );
}

export default Loading;
