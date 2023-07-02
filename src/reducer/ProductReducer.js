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

      // case "SET_NOTIFICATION_ALERT":
      //   // const {message, typ} = action.paylad
      //   return{
      //     ...state,
      //     alert:{
      //       // ...state.alert,
      //       message:action.paylaod.message,
      //       type:action.payload.typ
      //     }
      //   }

      //   case "SET_NOTIFICATION_NULL":
      //     return {
      //       ...state,
      //       alert: {
      //       ...state.alert,
      //         message: null,
      //         type: null
      //       }
      //     }

    default:
      return state;
  }
};

export default ProductReducer;
