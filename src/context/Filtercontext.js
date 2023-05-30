import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { UseProductContext } from "./ProductContext";
const FilterContext = createContext();

const initialState = {
  allProducts: [],
  searchedItem:[],
    text: "",
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = UseProductContext();

  const handleSearch = (e) => {
    // const name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "GET_SEARCH_INPUT", payload: value });
  };

  useEffect(() => {
    dispatch({type: "SET_SEARCH_PRODUCT"});
  },[state.text])

  //products loading to state
  useEffect(() => {
    dispatch({type:"LOADING_DATA", payload:products})
  },[products])

  console.log('searched item', state.searchedItem);

  return (
    <FilterContext.Provider value={{ ...state, handleSearch }}>
      {children}
    </FilterContext.Provider>
  );
};

const UseFilterContext = () => {
  return useContext(FilterContext);
};

export { UseFilterContext, FilterContextProvider, FilterContext };
