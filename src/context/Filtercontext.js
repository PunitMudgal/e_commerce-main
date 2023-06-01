import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { UseProductContext } from "./ProductContext";
const FilterContext = createContext();

const initialState = {
 filterProducts: []
 
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = UseProductContext();

  
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

const UseFilterContext = () => {
  return useContext(FilterContext);
};

export { UseFilterContext, FilterContextProvider, FilterContext };
