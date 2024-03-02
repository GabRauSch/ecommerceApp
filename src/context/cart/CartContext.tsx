import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { CartState, CartAction } from './actionsTypes';
import CartReducer, {initialCartState} from './CartReducer';

type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType>({
  state: initialCartState,
  dispatch: () => null,
});

type Props = {
  children: ReactNode
}
export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
