import { UseProductContext } from "../context/ProductContext";

const FilterReducer = (state, action) => {
  const { products } = UseProductContext();

  switch (action.type) {
   
      // if (text !== "") {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) => {
      //     return curElem.name.toLowerCase().includes(text);
      //   });
      // }
      // return { ...state, searchedItem: tempFilterProduct };

    default:
      return state;
  }
};

export default FilterReducer;
