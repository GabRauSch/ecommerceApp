import React, { createContext, useContext, useReducer, Dispatch, ReactNode } from 'react';
import authReducer, { initialAuthState } from './auth/AuthReducer';
import  cartReducer, {initialCartState } from './cart/CartReducer';
import { AuthAction, AuthState } from './auth/actionTypes';
import { CartAction, CartState } from './cart/actionsTypes';

interface GlobalState {
  authState: AuthState;
  cartState: CartState;
}

type GlobalAction = AuthAction | CartAction;

const initialGlobalState: GlobalState = {
  authState: initialAuthState,
  cartState: initialCartState,
};

const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<GlobalAction>;
}>({
  state: initialGlobalState,
  dispatch: () => null,
});

type Props = {
  children: ReactNode
}

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    (prevState: GlobalState, action: GlobalAction) => ({
      authState: authReducer(prevState.authState, action as AuthAction),
      cartState: cartReducer(prevState.cartState, action as CartAction),
    }),
    initialGlobalState
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
