import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import AuthReducer, { initialAuthState } from './AuthReducer';
import { AuthState, AuthAction } from './actionTypes';

type AuthContextType = {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType>({
  state: initialAuthState,
  dispatch: () => null,
});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

