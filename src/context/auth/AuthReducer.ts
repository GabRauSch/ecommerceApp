import { AuthAction, AuthState, ActionTypes } from './actionTypes';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
    case ActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AuthReducer;
