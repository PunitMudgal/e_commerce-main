const CartReducer = (state, action) => {
    switch (action.type){

        case "GET_CART_PRODUCTS":
            return {
              ...state,
              cartProducts: action.payload,
            };
      
          case "INCREASE_ITEM_QUANTITY":
            const updatedProduct = state.cartProducts.map((item) => {
              if (item.id === action.payload && item.quantity < 9) {
                let newQuantity = item.quantity + 1;
                return {
                  ...item,
                  quantity: newQuantity,
                };
              } else {
                return item;
              }
            });
            return {
              ...state,
              cartProducts: updatedProduct,
            };
      
          case "DECREASE_ITEM_QUANTITY":
            const updatedProduct2 = state.cartProducts.map((item) => {
              if (item.id === action.payload && item.quantity >= 2) {
                let newQuantity = item.quantity - 1;       
                return {
                  ...item,
                  quantity: newQuantity,
                };
              } else {
                return item;
              }
            });
            return {
              ...state,
              cartProducts: updatedProduct2,
            };
        default:
            return state;
    }
}
export default CartReducer;