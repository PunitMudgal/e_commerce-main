import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";
import {
  QuerySnapshot,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UseAuthProvider } from "./AuthContext";

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
  cartProducts: [],
};

const ProductProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: null, type: null });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = UseAuthProvider();

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

  // useEffect 

  // message (alert)
  const Notification = (message, typ) => {
    setAlert({ message, type: typ });
    setTimeout(() => {
      setAlert({ message: null, type: null });
    }, 3000);
  };

  // add item to the cart
  // const HandleAddToCart = async (id, title, name, image, price) => {
  //   if (user?.email) {
  //     Notification("Item Added to Cart", "success");
  //     await updateDoc(doc(db, "users", user.email), {
  //       savedItems: arrayUnion({
  //         id,
  //         title: title || name,
  //         image,
  //         price,
  //         quantity: 1,
  //       }),
  //     });
  //   } else {
  //     Notification("Login To add Item", "failed");
  //   }
  // };

  // const increaseQuantity = async (itemId) => {
  //   dispatch({ type: "INCREASE_ITEM_QUANTITY", payload: itemId });
  // };

  // const decreaseQuantity = (itemId) => {
  //   dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: itemId });
  // };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleData,
        Notification,
        alert,
        // HandleAddToCart,
        // increaseQuantity,
        // decreaseQuantity,
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
