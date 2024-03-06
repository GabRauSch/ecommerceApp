import { CartState, CartAction, ActionTypes } from "./actionTypes";

export const initialCartState: CartState = {
  items: [],
  total: 0,
};

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // Handle adding item to cart
      return state;
    case ActionTypes.REMOVE_FROM_CART:
      // Handle removing item from cart
      return state;
    case ActionTypes.CLEAR_CART:
      // Handle clearing cart
      return {
        ...state,
        items: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default CartReducer;
