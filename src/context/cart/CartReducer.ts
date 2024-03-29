import { CartState, CartAction, ActionTypes } from "./actionsTypes";

export const initialCartState: CartState = {
  items: [],
  total: 0,
};

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return state;
    case ActionTypes.REMOVE_FROM_CART:
      return state;
    case ActionTypes.CLEAR_CART:
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
