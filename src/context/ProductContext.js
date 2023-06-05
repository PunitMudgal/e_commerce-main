import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
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
  singleProduct: {},
  isSingleLoading: false,
  filterProduct: [],
  products2: [],
  gridView: true,
  filter: {
    search: "",
    sorting_value: "default",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
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
      dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload:singleProductData });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getAllData(apiKey1, apiKey2);
  }, []);

  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  // categories
  const categoriesProducts = (cat) => {
    dispatch({ type: "SET_CATEGORIES", payload: cat });
  };

  // search products
  // const serachProducts = (text) => {
  //   dispatch({ type: "SET_SEARCH_PRODUCT", payload: text });
  // };

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
  }, [state.filter.search]);

  //clear filters
  const ClearFilter = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: state.products });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleData,
        setListView,
        setGridView,
        categoriesProducts,
        ClearFilter,
        getSortingValues,
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
