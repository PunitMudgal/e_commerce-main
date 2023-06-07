import React from "react";
import Product from "./Product";
import ListView from "./ListView";
import { UseFilterContext } from "../context/FilterContext";

function ViewType() {
  const { filterProduct, gridView } = UseFilterContext();

  if (gridView === true) {
    return (
      <div key={filterProduct.id} className="grid grid-cols-3 gap-4 md:gap-1 md:grid-cols-2">
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
