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
        products2: action.payload,
      };
    case "ALL_DATA_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isSingleError: true,
        isSingleLoading: false,
      };

    case "GET_CART_PRODUCTS":
      return {
        ...state,
        cartProducts: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
