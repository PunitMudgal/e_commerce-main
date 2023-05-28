import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();
const apiKey1 = "https://api.pujakaitem.com/api/products";
const apiKey2 = "https://fakestoreapi.com/products";
const initialState = {
  isLoadingProduct: false,
  isErrorProduct: false,
  products: [],
  isLoadingGadget: false,
  isErrorGadget: false,
  gadgets: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getGadgets = async (key) => {
    dispatch({ type: "API_LOADING_GADGET" });
    try {
      const response = await axios.get(key);
      const data = await response.data;
      dispatch({ type: "API_SUCCESS_GADGET", payload: data });
    } catch (err) {
      dispatch({ type: "API_ERROR_GADGET" });
      console.log(err);
    }
  };
  const getProducts = async (key) => {
    dispatch({ type: "API_LOADING_PRODUCT" });
    try {
      const response = await axios.get(key);
      const data = await response.data;
      dispatch({ type: "API_SUCCESS_PRODUCT", payload: data });
    } catch (err) {
      dispatch({ type: "API_ERROR_PRODUCT" });
      console.log(err);
    }
  };

  useEffect(() => {
    getGadgets(apiKey1);
    getProducts(apiKey2);
  }, []);
  console.log("state", state);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

const UseProductContext = () => {
 return useContext(ProductContext);
};
export { ProductProvider, ProductContext, UseProductContext };
