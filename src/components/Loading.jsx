import React from "react";
import Skeleton from 'react-loading-skeleton'
function Loading() {
  return (
    <>
      <div className="flex flex-wrap h-[100vh] w-fll">
        <Skeleton height={300} width={200} />
        <Skeleton height={300} width={200} />
        <Skeleton height={300} width={200} />
        <Skeleton height={300} width={200} />
        <Skeleton />
      </div>
      
    </>
  );
}

export default Loading;
