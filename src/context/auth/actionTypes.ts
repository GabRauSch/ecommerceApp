export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// 
// 

export type User = {
  id: number
}

// FIX 
// 

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
}

interface LoginRequestAction {
  type: ActionTypes.LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: ActionTypes.LOGIN_SUCCESS;
  payload: { user: User };
}

interface LoginFailureAction {
  type: ActionTypes.LOGIN_FAILURE;
  payload: { error: string };
}

interface RegisterRequestAction {
  type: ActionTypes.REGISTER_REQUEST;
}

interface RegisterSuccessAction {
  type: ActionTypes.REGISTER_SUCCESS;
  payload: { user: User };
}

interface RegisterFailureAction {
  type: ActionTypes.REGISTER_FAILURE;
  payload: { error: string };
}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction;
