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

    // case "GET_CART_PRODUCTS":
    //   return {
    //     ...state,
    //     cartProducts: action.payload,
    //   };

    // case "INCREASE_ITEM_QUANTITY":
    //   const updatedProduct = state.cartProducts.map((item) => {
    //     if (item.id === action.payload && item.quantity < 9) {
    //       let newQuantity = item.quantity + 1;
    //       return {
    //         ...item,
    //         quantity: newQuantity,
    //       };
    //     } else {
    //       return item;
    //     }
    //   });
    //   return {
    //     ...state,
    //     cartProducts: updatedProduct,
    //   };

    // case "DECREASE_ITEM_QUANTITY":
    //   const updatedProduct2 = state.cartProducts.map((item) => {
    //     if (item.id === action.payload && item.quantity >= 2) {
    //       let newQuantity = item.quantity - 1;       
    //       return {
    //         ...item,
    //         quantity: newQuantity,
    //       };
    //     } else {
    //       return item;
    //     }
    //   });
    //   return {
    //     ...state,
    //     cartProducts: updatedProduct2,
    //   };

    default:
      return state;
  }
};

export default ProductReducer;
