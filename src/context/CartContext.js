import { useEffect, createContext, useReducer, useContext } from "react";
import { UseAuthProvider } from "./AuthContext";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import reducer from "../reducer/CartReducer";
import { UseProductContext } from "./ProductContext";
//! if there is only one state in then use useState and remove reducer
const CartContext = createContext();

const initialState = {
  cartProducts: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = UseAuthProvider();
  const { Notification } = UseProductContext();

  // get cart products from firestore database
  useEffect(() => {
    if (user !== null) {
      const unsubscribe = onSnapshot(
        doc(db, "users", `${user.email}`),
        (doc) => {
          dispatch({
            type: "GET_CART_PRODUCTS",
            payload: doc.data()?.savedItems,
          });
        }
      );
      return () => unsubscribe();
    }
  }, [user]);

  const HandleAddToCart = async (id, title, name, image, price) => {
    if (user?.email) {
      Notification("Item Added to Cart", "success");
      await updateDoc(doc(db, "users", user.email), {
        savedItems: arrayUnion({
          id,
          title: title || name,
          image,
          price,
          quantity: 1,
        }),
      });
    } else {
      Notification("Login To add Item", "failed");
    }
  };

  const increaseQuantity = async (itemId) => {
    dispatch({ type: "INCREASE_ITEM_QUANTITY", payload: itemId });
  };

  const decreaseQuantity = (itemId) => {
    dispatch({ type: "DECREASE_ITEM_QUANTITY", payload: itemId });
  };

  return (
    <CartContext.Provider
      value={{ ...state, increaseQuantity, decreaseQuantity, HandleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
