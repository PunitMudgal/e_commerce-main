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
      };
    case "ALL_DATA_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
