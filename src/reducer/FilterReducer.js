import { UseProductContext } from "../context/ProductContext";

const FilterReducer = (state, action) => {
  const { products } = UseProductContext();

  switch (action.type) {
    case "LOADING_DATA":
      return { ...state, allProducts: [...action.payload] };

    case "GET_SEARCH_INPUT":
      return { ...state, text: action.payload };

    case "SET_SEARCH_PRODUCT":
      let { allProducts, text } = state;
      let tempFilterProduct = [...allProducts];
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.includes(text);
        });
      }
      return { ...state, searchedItem: tempFilterProduct };

    default:
      return state;
  }
};

export default FilterReducer;
