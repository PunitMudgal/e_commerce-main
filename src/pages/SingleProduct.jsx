import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProductContext } from "../context/ProductContext";

function SingleProduct() {
  const api1 = "https://fakestoreapi.com/products";
  const api2 = "https://api.pujakaitem.com/api/products";
  const { getSingleData, singleProduct } = UseProductContext();
  const { id } = useParams();

  useEffect(() => {
    if (Number(id) <= 20 && Number(id) >= 1) {
      getSingleData(`${api1}/${id}`);
    } else {
      getSingleData(`${api2}?id=${id}`);
    }
  }, [id]);
  return <div>
    
  </div>;
}

export default SingleProduct;
