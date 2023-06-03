const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ALL_DATA_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "ALL_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        filterProduct: action.payload,
      };
    case "ALL_DATA_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_CATEGORIES":
      const { products } = state;
      const categoriesOfProducts = products.filter(
        (prod) => prod.category === action.payload
      );
      return {
        ...state,
        filterProduct: categoriesOfProducts,
      };

    case "GET_SORTING_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProduct, sorting_value } = state;
      let tempSortProduct = [...filterProduct];

      const sortingProducts = (a, b) => {
        if (sorting_value === "default") return null;

        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name || a.title.localeCompare(b.name || b.title);
        }
        if (sorting_value === "z-a") {
          return b.name || b.title.localeCompare(a.name || a.title);
        }
        console.log('--> inside <--')
      };
      console.log('filterproduce',filterProduct)
      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filterProduct: newSortData,
      };

    // case "SET_SEARCH_PRODUCT":
    //   const { products } = state;
    //   const searchProduct = products.filter((prod) => {
    //     return prod.name||prod.title === action.payload;
    //   });
    //   return {
    //     ...state,
    //     filterProduct: searchProduct,
    //   };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filterProduct: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
