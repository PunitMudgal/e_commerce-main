const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING_GADGET":
      return {
        ...state,
        isLoadingGadget: true,
      };
    case "API_SUCCESS_GADGET":
      return {
        ...state,
        isLoadingGadget: false,
        gadgets: action.payload,
      };
      case "API_ERROR_GADGET":
        return {
          ...state,
          isLoadingGadget: false,
          isErrorGadget: true,
        };
    case "API_LOADING_PRODUCT":
      return {
        ...state,
        isLoadingProduct: true,
      };
    case "API_SUCCESS_PRODUCT":
      return {
        ...state,
        isLoadingProduct: false,
        products: action.payload,
      };
   
      case "API_ERROR_PRODUCT":
      return {
        ...state,
        isLoadingProducts: false,
        isErrorProduct: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
