import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { CartState, CartAction } from './actionsTypes';
import CartReducer, {initialCartState} from './CartReducer';

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

type Props = {
  children: ReactNode
}
const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };