import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import AuthReducer, {initialAuthState} from './AuthReducer';
import { AuthState, AuthAction } from './actionTypes';

const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialAuthState,
  dispatch: () => null,
});

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
