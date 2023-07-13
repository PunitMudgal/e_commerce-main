import { useEffect, createContext, useContext, useReducer } from "react";
import reducer from "../reducer/FilterReducer";
import { UseProductContext } from "./ProductContext";

const filterContext = createContext();

const initialState = {
  filterProduct: [],
  products2: [],
  // products3: [],
  gridView: true,
  filter: {
    search: "",
    sorting_value: "default",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

const FilterProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = UseProductContext();

  useEffect(() => {
    dispatch({ type: "LOADING_DATA_TO_FILTERS", payload: products });
  }, [products]);

  //!start
  // list view type
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  // grid view type
  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  // categories
  const categoriesProducts = (cat) => {
    dispatch({ type: "SET_CATEGORIES", payload: cat });
  };

  // sorting products
  // get values from input options
  const getSortingValues = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "GET_SORTING_VALUE", payload: { name, value } });
    SortProducts();
  };

  const SortProducts = () => {
    dispatch({ type: "SORTING_PRODUCTS" });
  };

  useEffect(() => {
    dispatch({ type: "SEARCHING_PRODUCTS" });
  }, [state.filter.search, state.filter.price]);

  //clear filters
  const ClearFilter = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: products });
  };

  //!end

  return (
    <filterContext.Provider
      value={{
        ...state,
        setListView,
        setGridView,
        categoriesProducts,
        ClearFilter,
        getSortingValues,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const UseFilterContext = () => {
  return useContext(filterContext);
};

export { filterContext, UseFilterContext, FilterProductProvider };
