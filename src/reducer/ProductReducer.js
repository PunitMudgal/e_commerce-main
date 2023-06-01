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
      // const {cat} = action.payload;
      const categoriesOfProducts = products.filter(
        (prod) => prod.category === action.payload
      );
      return {
        ...state,
        filterProduct: categoriesOfProducts,
      };

      case "CLEAR_FILTERS":
        return{
          ...state,
          filterProduct:action.payload
        }

    default:
      return state;
  }
};

export default ProductReducer;
