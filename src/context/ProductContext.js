import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();
const apiKey1 = "https://api.pujakaitem.com/api/products";
const apiKey2 = "https://fakestoreapi.com/products";
const initialState = {
  isError: false,
  isLoading: false,
  products: [],
  isSingleError: false,
  isSingleLoading: false,
  singleProduct: {},
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllData = async (key1, key2) => {
    dispatch({ type: "ALL_DATA_LOADING" });
    try {
      const response1 = await axios.get(key1);
      const response2 = await axios.get(key2);
      const data1 = await response1.data;
      const data2 = await response2.data;
      dispatch({ type: "ALL_DATA_SUCCESS", payload: [...data1, ...data2] });
    } catch (error) {
      dispatch({ type: "ALL_DATA_ERROR" });
      console.log(error);
    }
  };

  const getSingleData = async (URL1) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(URL1);
      const singleProductData = await res.data;
      dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload: singleProductData });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getAllData(apiKey1, apiKey2);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const UseProductContext = () => {
  return useContext(ProductContext);
};
export { ProductProvider, ProductContext, UseProductContext };
