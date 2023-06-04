import React from "react";
import { UseProductContext } from "../context/ProductContext";
import Product from "./Product";
import ListView from "./ListView";

function ViewType() {
  const { filterProduct, gridView } = UseProductContext();

  if (gridView === true) {
    return (
      <div className="grid grid-cols-3 gap-4 md:gap-1 md:grid-cols-2">
        {filterProduct.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    );
  }
  if (gridView === false) {
    return<div className='box-shoadow grid gap-4 md:gap-1 '>
    {filterProduct.map((product) => 
        <ListView key={product.id} {...product} />
    )}
</div>
  }
}

export default ViewType;
